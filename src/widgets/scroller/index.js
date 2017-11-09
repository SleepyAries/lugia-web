/*
 *
 * 滚动条
 * @flow
 * create by ligx 170911
 */
import * as React from 'react';
import styled from 'styled-components';
import Support from '../common/FormFieldWidgetSupport';
import { cacheOnlyFirstCall, getElementPosition, } from '../../utils';
import addEventListener from 'rc-util/lib/Dom/addEventListener';

const BarDefaultSize = 12;
const Container = styled.div`
  position: relative;
  background: #e3e3e6;
  width: 20px;
  height: 300px;
  border-radius: 5px;
  z-index: 996;
`;

const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  background: ${props => (props.disabled ? '#898989' : '#49a9ee')};
  color: #FFF;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  :hover {
    background-color: #49a9ee96;
  }
`;
const XContainer = Container.extend`
  height: ${BarDefaultSize}px;
`;
const YContainer = Container.extend`
  width: ${BarDefaultSize}px;
`;
const BarDefaultSizePadding = 4;

const XBar = Bar.extend`
  height: ${BarDefaultSize - BarDefaultSizePadding}px;
  margin-bottom: 2px;
  margin-top: 2px;
`;

const YBar = Bar.extend`
  width: ${BarDefaultSize - BarDefaultSizePadding}px;
  margin-left: 2px;
  margin-right: 2px;
`;

const XScroller = 'x', YScroller = 'y';

type ScrollerProps = {
  totalSize: number,
  viewSize: number,
  type: 'x' | 'y',
  onChange?: Function,
  value?: number,
  throttle: number,
  defaultValue?: number,
  step: number,
};
type ScrollerState = {
  value: number,
  sliderSize: number,
};
const Down = 'down';
const Up = 'up';
const None = 'none';
type Direction = 'down' | 'up' | 'none';

class Scroller extends React.Component<ScrollerProps, ScrollerState> {

  static defaultProps = {
    type: YScroller,
    throttle: 100,
    step: 1,
  };

  htmlScroller: HTMLElement;
  scroller: ?Object;
  drag: boolean;
  state: ScrollerState;
  throttleTimer: number;
  posGetter: Object;

  constructor (props: ScrollerProps) {
    super(props);
    this.componentWillReceiveProps(props);
    const { defaultValue = 0, } = props;
    this.state = {
      value: defaultValue,
      sliderSize: this.getSliderBarSize(props),
    };
    this.posGetter = cacheOnlyFirstCall(getElementPosition);
    this.updateStepInfo(props);
  }

  maxValue: number;

  updateStepInfo (props: ScrollerProps): void {
    const { totalSize, viewSize, step, } = props;
    this.step = step;
    this.maxValue = totalSize - viewSize;
    this.fastStep = totalSize / 4;
  }

  componentWillReceiveProps (props: ScrollerProps) {
    this.updateStepInfo(props);
    const changeState = { sliderSize: this.getSliderBarSize(props), };
    this.state = { ...this.state, ...changeState, };
  }


  getSliderBarSize (props: ScrollerProps) {
    let result = 0;
    const { viewSize, totalSize, } = props;
    const hidenWidthOrHeight = (totalSize - viewSize);

    if (hidenWidthOrHeight > 0) {
      const computeValue = (viewSize * viewSize / totalSize);
      result = Math.max(10, computeValue);
    }

    return result;
  }


  render () {
    const { sliderSize, } = this.state;
    const { viewSize, } = this.props;
    const value = Support.getNumberValue(this.props, this.state);
    const style: Object = {};
    const barStyle = {};
    let Target, TargetContainer;
    const viewPx = this.getPX(viewSize);
    const barPx = this.getPX(sliderSize);
    const posPx = this.getPX(this.value2pos(value));

    this.selectType(() => {
      style.width = viewPx;
      barStyle.width = barPx;
      barStyle.left = posPx;
      Target = XBar;
      TargetContainer = XContainer;

    }, () => {
      style.height = viewPx;
      barStyle.height = barPx;
      barStyle.top = posPx;
      Target = YBar;
      TargetContainer = YContainer;
    });

    if (!TargetContainer || !Target) {
      return '';
    }


    return <TargetContainer style={style} innerRef={cmp => this.htmlScroller = cmp}
                            onMouseMove={this.onMouseMove}
                            onMouseOut={this.onMouseOut}
                            onWheel={this.onWheel}
                            onMouseDown={this.onContainerMouseDown}
                            onMouseUp={this.onContainerMouseUp}
    >
      <Target style={barStyle}
              onMouseDown={this.onMouseDown}
              onMouseUp={this.onMouseUp}

      >
      </Target>
    </TargetContainer>;
  }


  getPX (val: number): string {
    return `${val}px`;
  }


  bodyMouseMoveHandle: Object;
  bodyMouseUpHandle: Object;

  componentDidMount () {
    if (document.body) {
      if (this.bodyMouseMoveHandle === undefined) {
        this.bodyMouseMoveHandle = this.bindDoc('mousemove', (e: Object) => {
          if (this.isDrag) {
            this.processDomEvent(e);
          }
        });
      }
      if (this.bodyMouseUpHandle === undefined) {
        this.bodyMouseUpHandle = this.bindDoc('mouseup', (e: Object) => {
          this.isDrag = false;
        });
      }
    }
  }


  bindDoc (event: string, callback: Function): Object {
    return addEventListener(document, event, callback);
  }


  onMouseDown = () => {
    this.isDrag = true;
  };
  move: number;

  clearMove () {
    if (this.move) {
      clearInterval(this.move);
    }
  }

  onContainerMouseUp = (e: Object) => {
    this.processDomEvent(e);
    this.clearMove();
    this.isDrag = false;
  };

  getDirection (fx: number): Direction {
    if (fx === 0) {
      return None;
    }
    if (fx < 0) {
      return Down;
    }
    return Up;

  }

  onContainerMouseDown = (e: Object) => {
    if (this.isDrag) {
      return;
    }
    this.step = this.props.step;
    this.clearMove();
    let fx = None;
    const mousePos = this.getPos(e);
    const targetValue = this.pos2value(mousePos);
    if (this.value2pos(this.state.value) > mousePos) {
      fx = Down;
    } else {
      fx = Up;
    }
    this.move = setInterval(() => {
      if (fx === Down) {
        this.fastMove(fx, 2, targetValue);
      } else {
        this.fastMove(fx, 2, this.maxValue, targetValue);
      }
      if (this.state.value >= targetValue) {
        this.clearMove();
      }
    }, 200);
  };
  onMouseUp = () => {
    this.isDrag = false;
  };
  onMouseOut = () => {
    this.clearMove();
  };

  onMouseMove = (e: Object) => {
    if (this.isDrag) {
      this.processDomEvent(e);
    }
  };

  processDomEvent (e: Object, time: ?number) {
    const value = this.pos2value(this.getPos(e));
    this.setValue(value, time);
  }


  componentWillUnmount () {
    this.bodyMouseMoveHandle && this.bodyMouseMoveHandle.remove();
    this.bodyMouseUpHandle && this.bodyMouseUpHandle.remove();
  }

  lastFx: string;
  lastTime: number;
  step: number;
  fastStep: number;
  onWheel = (event: Object) => {
    const { deltaY, } = event;
    this.fastMove(deltaY, 0.03, this.maxValue);
  };


  fastMove = (fx: Direction, percent: number, maxValue: number, minValue: number = 0) => {
    if (fx === None) {
      return;
    }

    const now = new Date();
    const timeSpan = now - this.lastTime;
    const { step, } = this.props;
    const { value, } = this.state;

    if (this.lastTime && timeSpan < 500) {
      this.step = this.step * (1 + percent);
    } else {
      this.step = step;
    }
    this.step = Math.min(this.fastStep, this.step);
    let newValue = value + this.getMoveStep(fx, this.step);
    newValue = Math.min(newValue, maxValue);
    newValue = Math.max(newValue, minValue);

    if (this.lastFx !== undefined && this.lastFx !== fx) {
      const timeSpan = new Date() - this.lastTime;
      if (timeSpan < 200) {
        this.lastFx = fx;
        return;
      }
    }

    this.setValue(newValue);
    this.lastFx = fx;
    this.lastTime = now;
  };

  getMoveStep (fx: Direction, step: number): number {
    if (fx === None) {
      return step;
    }
    return fx === Down ? step : -step;
  }

  setValue (theValue: number, time: ?number) {
    if (theValue === this.state.value) {
      return;
    }
    const min = Math.max(0, theValue);
    const max = this.maxValue;
    const value = Math.min(min, max);

    this.setState({ value, }, () => {
      this.scrolling(value, time);
    });
  }

  scrolling (value: number, time: ?number) {
    const interval = time || this.props.throttle;
    const scrolling = () => {
      const { onChange, } = this.props;
      onChange && onChange(value);
    };
    if (this.throttleTimer !== undefined) {
      clearTimeout(this.throttleTimer);
    }
    this.throttleTimer = setTimeout(scrolling, interval);
  }

  getPos (e: Object) {
    const arg = this.posGetter.func(this.htmlScroller);

    let pos = 0;
    const { viewSize, } = this.props;
    this.selectType(() => {
      const { clientX, } = e;
      const { x, } = arg;
      pos = clientX - x;
    }, () => {
      const { clientY, } = e;
      const { y, } = arg;
      pos = clientY - y;
    });
    return Math.min(pos, viewSize);
  }

  async selectType (x: Function, y: Function) {
    const { type, } = this.props;
    switch (type) {
      case XScroller:
        x();
        break;
      case YScroller:
        y();
        break;
      default:
    }
  }

  isDrag: boolean;


  shouldComponentUpdate (nextProps: ScrollerProps, nextState: ScrollerState) {
    return this.props.viewSize !== nextProps.viewSize
      || !this.scroller
      || this.state.value !== nextState.value
      || this.props.totalSize !== nextProps.totalSize;
  }


  value2pos (value: number) {
    const { viewSize, } = this.props;
    const { sliderSize, } = this.state;
    return Math.min(value * this.unitPos(), viewSize - sliderSize);
  }


  pos2value (pos: number) {
    return pos / this.unitPos();
  }

  unitPos (): number {
    const { viewSize, totalSize, } = this.props;
    return viewSize / totalSize;
  }

}

export default Scroller;
