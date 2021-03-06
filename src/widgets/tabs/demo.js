/**
 *
 * create by liangguodong
 *
 * @flow
 */
import * as React from 'react';
import Tabs from './';
import Button from '../button';
import Tabpane from './tabpane';
import Widget from '../consts/index';
import Icon from '../icon';
import Theme from '../theme/';

import colorsFunc from '../css/stateColor';
import { getBorder, getBorderRadius, getBoxShadow } from '@lugia/theme-utils';
import { css, StaticComponent } from '@lugia/theme-css-hoc';

const { themeColor } = colorsFunc();

const ContainerBox = StaticComponent({
  tag: 'div',
  className: 'ContentBlock',
  css: css`
    margin: 10px;
    &:last-child {
      margin-bottom: 200px;
    }
  `,
});

const CustomHome = StaticComponent({
  tag: 'div',
  className: 'CustomHome',
  css: css`
    width: 40px;
  `,
});

const CustomTitle = StaticComponent({
  tag: 'div',
  className: 'CustomTitle',
  css: css`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 120px;
  `,
});

const CustomContent = StaticComponent({
  tag: 'div',
  className: 'CustomContent',
  css: css`
    padding: 20px;
  `,
});

const onPreClick = e => {
  console.log('res onPreClick', e);
};
const onNextClick = e => {
  console.log('res onNextClick', e);
};

const titleStyle = { margin: '20px 0', fontWeight: 'bold' };
export const defaultData = [
  {
    title: 'Tab1',
    content: 'content of Tab1',
  },
  {
    title: 'Tab2',
    content: 'content of Tab2',
  },
  {
    title: 'Tab3',
    content: 'content of Tab3',
  },
];
export const suffixData = [
  {
    title: 'Tab1',
    content: 'content of Tab1',
    suffixIcon: <Icon iconClass={'lugia-icon-financial_archive'} />,
  },
  {
    title: 'Tab2',
    content: 'content of Tab2',
  },
  {
    title: 'Tab3',
    content: 'content of Tab3',
  },
];
export const disabledData = [
  {
    title: 'Tab1',
    content: 'content of Tab1',
  },
  {
    title: 'Tab2',
    content: 'content of Tab2',
    disabled: true,
  },
  {
    title: 'Tab3',
    content: 'content of Tab3',
  },
];
export const hasActivityValueData = [
  {
    title: 'Tab1',
    content: <div>1111111111</div>,
    value: '0',
  },
  {
    title: 'Tab2',
    content: (
      <div>
        <div>222222</div>
      </div>
    ),
    value: '1',
  },
  {
    value: '2',
    title: 'Tab3',
    content: (
      <div>
        <div>
          <div>33333</div>
        </div>
      </div>
    ),
  },
  {
    value: '3',
    title: 'Tab4',
    disabled: true,
    content: (
      <div>
        <div>
          <div>44444</div>
          <div>44444</div>
        </div>
      </div>
    ),
  },
  {
    value: '4',
    title: 'Tab5',
    content: 55555,
  },
  {
    value: '5',
    title: 'Tab6',
    content: 66666,
  },
  {
    value: '6',
    title: 'Tab7',
    content: 77777,
  },
  {
    value: '7',
    title: 'Tab8',
    content: 888888,
  },
];
export const children = [
  <Tabpane title={'1111'} content={'11111'} value={'0'} />,
  <Tabpane title={'2222'} content={<div>2222</div>} value={'1'} />,
  <Tabpane
    title={'3333'}
    content={
      <div>
        <div>
          <div>3333</div>
        </div>
      </div>
    }
    value={'2'}
  />,
  <Tabpane
    title={'4444'}
    content={
      <div>
        <div>
          <div>44444</div>
        </div>
      </div>
    }
    value={'3'}
  />,
  <Tabpane
    title={'555555'}
    content={
      <div>
        <div>
          <div>55555</div>
        </div>
      </div>
    }
    value={'4'}
  />,
  <Tabpane
    title={'666666'}
    content={
      <div>
        <div>
          <div>66666</div>
        </div>
      </div>
    }
    value={'5'}
  />,
];
export const longChildren = [
  <Tabpane title={'11111'} content={'这里是菜单啊~排骨，猪蹄，茴香小油条，豆腐，白菜，大萝卜'} />,
  <Tabpane title={'2222'} content={<div>22222222222222</div>} />,
  <Tabpane
    title={'3333'}
    content={
      <div>
        <div>
          <div>33333333</div>
        </div>
      </div>
    }
  />,
  <Tabpane
    title={'4444'}
    content={
      <div>
        <div>
          <div>44444</div>
        </div>
      </div>
    }
  />,
  <Tabpane
    title={'555555'}
    content={
      <div>
        <div>
          <div>55555</div>
        </div>
      </div>
    }
  />,
  <Tabpane
    title={'666666'}
    content={
      <div>
        <div>
          <div>66666</div>
        </div>
      </div>
    }
  />,
];
export const shortChildren = [
  <Tabpane
    title={'11111'}
    content={'这里是菜单啊~排骨，猪蹄，茴香小油条，豆腐，白菜，大萝卜'}
    icon={'lugia-icon-financial_archive'}
  />,
  <Tabpane title={'2222'} content={<div>22222222222222</div>} value={'1'} />,
  <Tabpane
    title={'3333'}
    content={
      <div>
        <div>
          <div>33333333</div>
        </div>
      </div>
    }
    value={'2'}
  />,
];
const hasActivityValueChildren = [
  <Tabpane title={'11111'} content={'1111'} value={'0'} />,
  <Tabpane title={'2222'} content={<div>2222</div>} value={'1'} />,
  <Tabpane
    title={'3333'}
    content={
      <div>
        <div>
          <div>33333333</div>
        </div>
      </div>
    }
    value={'2'}
  />,
  <Tabpane
    title={'44444'}
    content={
      <div>
        <div>
          <div>444444444</div>
        </div>
      </div>
    }
    value={'3'}
  />,
  <Tabpane
    title={'55555'}
    content={
      <div>
        <div>
          <div>55555555555</div>
        </div>
      </div>
    }
    value={'4'}
  />,
  <Tabpane
    title={'66666'}
    content={
      <div>
        <div>
          <div>66666666666</div>
        </div>
      </div>
    }
    value={'5'}
  />,
  <Tabpane
    title={'7777777'}
    content={
      <div>
        <div>
          <div>77777777777</div>
        </div>
      </div>
    }
    value={'6'}
  />,
  <Tabpane
    title={'8888888'}
    content={
      <div>
        <div>
          <div>88888888888</div>
        </div>
      </div>
    }
    value={'7'}
  />,
  <Tabpane
    title={'999999'}
    content={
      <div>
        <div>
          <div>9999999999</div>
        </div>
      </div>
    }
    value={'8'}
  />,
  <Tabpane
    title={'10101010'}
    content={
      <div>
        <div>
          <div>10101101010</div>
        </div>
      </div>
    }
    value={'9'}
  />,
  <Tabpane
    title={'1111111'}
    content={
      <div>
        <div>
          <div>111111111111</div>
        </div>
      </div>
    }
    value={'10'}
  />,
  <Tabpane
    title={'12121212'}
    content={
      <div>
        <div>
          <div>121212</div>
        </div>
      </div>
    }
    value={'11'}
  />,
  <Tabpane
    title={'131313'}
    content={
      <div>
        <div>
          <div>131313131313</div>
        </div>
      </div>
    }
    value={'12'}
  />,
];
export const defaulttestDelayData = [
  {
    title: '猪蹄',
    content: (
      <div>
        {' '}
        <div>猪蹄啊啊啊啊</div> <div>猪蹄啊啊啊啊</div> <div>猪蹄啊啊啊啊</div>{' '}
        <div>猪蹄啊啊啊啊</div>{' '}
      </div>
    ),
    hideCloseBtn: true,
    icon: 'lugia-icon-financial_heart',
    suffixIcon: 'lugia-icon-financial_like',
  },
  { title: '排骨', content: '排骨啊啊啊啊' },
  { title: '鸡腿', content: '鸡腿啊啊啊啊' },
];

const addItem = [
  { title: '虾滑', content: '虾滑啊啊啊啊' },
  { title: '萝卜', content: '萝卜啊啊啊啊' },
  { title: '小油条', content: '小油条啊啊啊啊' },
  { title: '肥牛', content: '肥牛啊啊啊啊' },
  { title: '肥羊', content: '肥羊啊啊啊啊' },
  { title: '地瓜', content: '地瓜啊啊啊啊' },
  { title: '香菇', content: '香菇啊啊啊啊' },
];

const defaultHome = [
  {
    title: (
      <CustomHome>
        {' '}
        <Icon iconClass={'lugia-icon-financial_home'} />
      </CustomHome>
    ),
    content: <div>content of Home</div>,
    value: '0',
  },
];

const getRandom = (limit: number) => {
  return Math.floor(Math.random() * limit);
};
const getData = () => {
  const defaultData = [];
  for (let i = 0; i < 6; i++) {
    const valueNumber = getRandom(100);
    const valueNumberAfter = getRandom(20);
    const title = `Tab${valueNumber}${valueNumberAfter}`;
    const item = {
      title: <CustomTitle>{title}</CustomTitle>,
      content: <CustomContent>Content of new {title}</CustomContent>,
      value: title,
    };
    defaultData.push(item);
  }
  return defaultHome.concat(defaultData);
};

type TabpaneProps = {};

type TabpaneState = {
  data: Array<Object>,
  dataWindow: Array<Object>,
  activityValue: string,
  abc: Array<Object>,
};

export default class TabsDemo extends React.Component<any, any> {
  onChange = event => {
    console.log('switch event onChange');
  };
  static getDerivedStateFromProps(nextProps: TabpaneProps, state: TabpaneState) {
    let data = hasActivityValueData;
    let dataWindow = hasActivityValueData;
    let activityValue = 0;
    let abc = [
      {
        title: (
          <div
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              width: '40px',
              whitespace: 'nowrap',
              textAlign: 'center',
            }}
          >
            home
          </div>
        ),
        value: '0',
        content: '111',
      },
      {
        title: (
          <div
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              width: '120px',
              whitespace: 'nowrap',
              textAlign: 'center',
            }}
          >
            tabs1
          </div>
        ),
        value: '1',
        content: '111',
      },
    ];
    if (state) {
      data = state.data;
      dataWindow = state.dataWindow;
      activityValue = state.activityValue;
      abc = state.abc;
    }
    return {
      testDelayData: defaulttestDelayData,
      data,
      dataWindow,
      activityValue,
      abc,
    };
  }

  componentDidMount() {}

  onAddClick = () => {
    const { data } = this.state;
    const newData = [...data];
    const activeIndex = `Tab${data.length + 1}`;
    const item = this.getAddItem();
    newData.push(item);
    this.setState({ data: newData, activityValue: activeIndex });
  };

  onChange = (res: Object) => {
    console.log('res onChange', res);
    const { activityValue } = this.state;
    const { activityValue: newActivityValue } = res;
    if (newActivityValue === activityValue) {
      return;
    }
    this.setState({ activityValue: newActivityValue });
  };
  onDelete = (res: Object) => {
    console.log('res', res);
    const { dataWindow } = this.state;
    const { index } = res;
    const newDate = [...dataWindow];
    newDate.splice(index, 1);
    this.setState({ dataWindow: newDate });
  };
  onTabClick = (res: Object) => {
    console.log('onTabClick', res);
  };

  getAddItem = () => {
    const index = Math.floor(Math.random() * 5);
    return addItem[index];
  };
  onDeleteClick = (activityKey: string) => {
    console.log('activityKey', activityKey);
  };
  addTabPan = () => {
    const { abc } = this.state;
    const { title, content } = this.getAddItem();
    const value = `${abc.length}`;

    const newItem = {
      title: (
        <div
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            width: '120px',
            whitespace: 'nowrap',
            textAlign: 'center',
          }}
        >
          {title}
        </div>
      ),

      content,
      value,
    };
    abc.push(newItem);
    this.setState({ abc, abcActivityValue: value });
  };

  render() {
    const lineView = {
      [Widget.Tabs]: {
        ContentBlock: {
          normal: {
            padding: {
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
            },
          },
        },

        BorderStyle: {
          normal: {
            color: '#ffa6ca',
            width: 1,
            border: {
              right: {
                color: '#ff3946',
                width: 1,
                style: 'solid',
              },
            },
          },
        },
        TitleContainer: {
          normal: {
            width: 330,
            height: 300,
          },
        },

        TabHeader: {
          SelectTabPan: {
            normal: {
              color: 'red',
            },
            disabled: {
              color: '#ccc',
            },
          },
          DefaultTabPan: {
            normal: {
              height: 31,
            },
            hover: {
              color: 'orange',
            },
            disabled: {
              color: '#ccc',
            },
          },
        },
      },
    };
    const lineViewBot = {
      [Widget.Tabs]: {
        ContentBlock: {
          normal: {
            padding: {
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
            },
          },
        },
        TabHeader: {
          SelectTabPan: {
            normal: {
              color: 'red',
            },
            disabled: {
              color: '#ccc',
            },
          },
          DefaultTabPan: {
            normal: {
              height: 31,
            },
            hover: {
              color: 'orange',
            },
            disabled: {
              color: '#ccc',
            },
          },
        },
        BorderStyle: {
          normal: {
            border: {
              bottom: {
                color: '#FFCCFF',
                width: 1,
                style: 'solid',
              },
            },
          },
        },
        TitleContainer: {
          normal: {
            width: 330,
            height: 300,
          },
        },
      },
    };
    const lineViewLeft = {
      [Widget.Tabs]: {
        ContentBlock: {
          normal: {
            padding: {
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
            },
          },
        },
        BorderStyle: {
          normal: {
            border: {
              left: {
                color: '#FFCCFF',
                width: 1,
                style: 'solid',
              },
            },
          },
        },

        TitleContainer: {
          normal: {
            width: 330,
            height: 300,
          },
        },
        TabHeader: {
          SelectTabPan: {
            normal: {
              color: 'red',
            },
            disabled: {
              color: '#ccc',
            },
          },
          DefaultTabPan: {
            hover: {
              color: 'orange',
            },
            disabled: {
              color: '#ccc',
            },
          },
        },
      },
    };
    const lineViewTop = {
      [Widget.Tabs]: {
        ContentBlock: {
          normal: {
            padding: {
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
            },
          },
        },
        TitleContainer: {
          normal: {
            width: 330,
            // height: 300,
          },
        },
        TabHeader: {
          SelectTabPan: {
            normal: {
              color: 'red',
            },
            disabled: {
              color: '#ccc',
            },
          },
          DefaultTabPan: {
            normal: {
              height: 31,
            },
            hover: {
              color: 'orange',
            },
            disabled: {
              color: '#ccc',
            },
          },
        },
      },
    };
    const cardView = {
      [Widget.Tabs]: {
        Container: {
          normal: {
            width: '100%',
          },
        },
        TitleContainer: {
          normal: {
            // textAlign: 'center',
          },
        },
        AddButton: {
          normal: {},
          hover: {
            background: {
              color: '#ccc',
            },
          },
          disabled: {
            color: '#ccc',
          },
        },
        TabHeader: {
          SelectTabPan: {
            normal: {
              color: 'red',
              background: {
                color: '#fff',
              },
            },
            disabled: {
              color: '#ccc',
            },
          },
          DefaultTabPan: {
            normal: {
              background: {
                color: 'pink',
              },
            },
            hover: {
              color: 'orange',
            },
            disabled: {
              color: '#ccc',
            },
          },
        },
      },
    };
    const defaultCardView = {
      [Widget.Tabs]: {
        TabHeader: {},
        TitleContainer: {
          normal: {
            width: 330,
            height: 300,
          },
        },
        DisabledTabPan: {
          normal: {
            color: '#999',
          },
        },
        AddButton: {
          normal: {
            color: '#000',
            width: 20,
            height: 20,
            opacity: 1,
            background: {
              color: '#e8e8e8',
            },
            boxShadow: { x: 0, y: 0, color: '#e8e8e8', type: 'outset', blur: 1, spread: 1 },
            border: getBorder({ color: 'blue', width: 1, style: 'solid' }),
          },
          hover: {
            background: {
              color: '#ccc',
            },
          },
          disabled: {
            color: '#ccc',
          },
        },
      },
    };

    const windowView = {
      [Widget.Tabs]: {
        Container: {
          normal: {
            width: 300,
          },
        },
        WindowContainer: {
          normal: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
            background: {
              color: 'orange',
            },
          },
        },
        TitleContainer: {
          normal: {
            width: '100%',
          },
        },
        TabHeader: {
          SelectTabPan: {
            normal: {
              color: 'green',
            },
            disabled: {
              color: '#ccc',
            },
          },
          DefaultTabPan: {
            normal: {
              height: 40,
            },
            hover: {
              color: 'orange',
            },
            disabled: {
              color: '#ccc',
            },
          },
        },
        ContentBlock: {
          normal: {
            height: 300,
          },
        },
      },
    };
    const { testDelayData, data, dataWindow, activityValue, abc, abcActivityValue } = this.state;

    const updateTheme = {
      [Widget.Tabs]: {
        Container: {
          normal: {
            // width: '330',
            // height: 300,
            margin: {
              top: 10,
              left: 10,
              // right: 10,
              bottom: 10,
            },
          },
        },
        TitleContainer: {
          normal: {
            textAlign: 'center',
          },
        },
        ContentBlock: {
          normal: {
            padding: {
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
            },
            margin: {
              // top: 10,
              left: 10,
              right: 10,
              bottom: 10,
            },
            background: {
              color: '#aabbcc',
            },
            boxShadow: { x: 0, y: 0, color: '#ffb69e', type: 'outset', blur: 6, spread: 3 },
            border: getBorder({ color: 'blue', width: 1, style: 'solid' }),
            borderRadius: getBorderRadius(20),
            textAlign: 'center',
          },
        },
        BorderStyle: {
          normal: {
            color: '#6e6ccc',
            width: 1,
          },
        },
        TabHeader: {
          SelectTabPan: {
            normal: {
              color: 'red',
              boxShadow: getBoxShadow('0 0 6px pink'),
            },
            disabled: {
              color: '#ccc',
            },
          },
          DefaultTabPan: {
            normal: {
              height: 31,
              borderRadius: {
                bottomLeft: 0,
                bottomRight: 0,
                topLeft: 6,
                topRight: 6,
              },
              margin: {
                top: 4,
              },
            },
            hover: {
              color: 'orange',
            },
            disabled: {
              color: '#ccc',
            },
          },
        },
      },
    };
    const borderTheme = {
      [Widget.Tabs]: {
        TabHeader: {
          DividerTheme: {
            normal: {
              background: {
                color: '#ffce5a',
              },
              width: 30,
              // height: 30,
            },
          },
        },
      },
    };
    const IconTheme = {
      [Widget.Tabs]: {
        Container: {
          normal: {
            width: '530',
            height: 300,
          },
        },
        ArrowIcon: {
          normal: {
            color: 'red',
          },
          hover: {
            color: '#9c1a82',
          },
          disabled: {
            // color:'#6e782b'
          },
        },

        AddButton: {
          normal: {
            color: '#0cac9c',
          },
        },
        TabHeader: {
          DeleteIcon: {
            normal: {
              color: 'red',
            },
            hover: {
              color: '#16bc20',
            },
            disabled: {
              color: '#6e782b',
            },
          },
        },
      },
    };

    const tabpanTheme = {
      [Widget.Tabs]: {
        TabHeader: {
          DefaultTabPan: {
            normal: {
              // width: 120,
              // textAlign: 'left',
              padding: {
                left: 20,
                right: 20,
              },
            },
            disabled: {
              color: 'red',
            },
          },
        },
      },
    };
    return (
      <div>
        <Tabs
          // tabType={'card'}
          data={defaultData}
        />
        <Tabs tabType={'card'} defaultData={getData()} showDeleteBtn={true} />
        <Theme config={tabpanTheme}>
          <Tabs tabType={'card'} data={getData()} />
          <Tabs tabType={'window'} data={getData()} />
          <Tabs
            // tabType={'card'}
            data={getData()}
          />

          <Tabs tabPosition={'left'} data={getData()} />

          <Tabs tabPosition={'left'} data={defaultData} />

          <Tabs tabPosition={'right'} data={getData()} />
          <Tabs tabPosition={'bottom'} data={getData()} />
          <Tabs tabType={'window'} data={getData()} />
        </Theme>
        <Theme config={tabpanTheme}>
          <ContainerBox>
            <div onClick={this.addTabPan}>add tabPane</div>
            <Tabs data={abc} activityValue={abcActivityValue} showDividerLine showAddBtn={true} />
          </ContainerBox>
        </Theme>
        <ContainerBox>
          <Tabs>
            <Tabpane
              title={
                <div
                  style={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whitespace: 'nowrap',
                    width: '120px',
                  }}
                >
                  这里是很长很长超过了宽度要隐藏的文本吧
                </div>
              }
              content={'11111'}
              value={'0'}
              suffixIcon={'lugia-icon-direction_backward'}
            />
            <Tabpane title={'2222'} content={<div>2222</div>} value={'1'} />
            <Tabpane
              title={'3333'}
              content={
                <div>
                  <div>
                    <div>3333</div>
                  </div>
                </div>
              }
              value={'2'}
            />
            <Tabpane
              title={'4444'}
              content={
                <div>
                  <div>
                    <div>44444</div>
                  </div>
                </div>
              }
              value={'3'}
            />
            <Tabpane
              title={'555555'}
              content={
                <div>
                  <div>
                    <div>55555</div>
                  </div>
                </div>
              }
              value={'4'}
            />
          </Tabs>
        </ContainerBox>

        <ContainerBox>{/*<Tabs />*/}</ContainerBox>

        <ContainerBox>
          <Theme
            config={{
              [Widget.Tabs]: {
                Container: { normal: { height: 32, width: 540 } },
                ContentBlock: { normal: { background: 'none' } },
                TabHeader: {
                  DefaultTabPan: {
                    normal: {
                      color: '#737b89',
                      font: {
                        family: '',
                        size: 14,
                        style: 'normal',
                        weight: 'normal',
                      },
                      height: 28,
                      padding: { bottom: '', left: '', right: '', top: '' },
                      width: 132,
                    },
                  },
                  SelectTabPan: {
                    normal: {
                      color: '#0052db',
                      font: {
                        family: '',
                        size: 14,
                        style: 'normal',
                        weight: 'normal',
                      },
                    },
                  },
                },
                WindowContainer: {
                  normal: {
                    background: { color: '#F0F2F5' },
                    padding: { bottom: '2', left: '2', right: '', top: '2' },
                  },
                },
              },
            }}
          >
            <Tabs
              viewClass="wbGmRn0"
              data={[
                {
                  content: 'content',
                  icon: 'icon',
                  key: '1',
                  suffixIcon: 'suffixIcon',
                  title: '待办事项',
                },
                {
                  content: 'content',
                  icon: 'icon',
                  key: '2',
                  suffixIcon: 'suffixIcon',
                  title: '消息通知',
                },
                {
                  content: 'content',
                  icon: 'icon',
                  key: '3',
                  suffixIcon: 'suffixIcon',
                  title: '我的收藏',
                },
                {
                  content: 'content',
                  icon: 'icon',
                  key: '4',
                  suffixIcon: 'suffixIcon',
                  title: '资源下载',
                },
                {
                  content: 'content',
                  icon: 'icon',
                  key: '5',
                  suffixIcon: 'suffixIcon',
                  title: '我的收藏',
                },
                {
                  content: 'content',
                  icon: 'icon',
                  key: '6',
                  suffixIcon: 'suffixIcon',
                  title: '资源下载',
                },
              ]}
              defaultActivityValue=""
              forceRender=""
              pagedType={'single'}
              showAddBtn=""
              showDeleteBtn=""
              tabPosition={'top`'}
              tabType={'window'}
            />
          </Theme>
        </ContainerBox>

        <Theme
          config={{
            [Widget.Tabs]: {
              Container: { normal: { height: 60, width: 540 } },
              ContentBlock: { normal: { background: 'none' } },
              TabHeader: {
                DefaultTabPan: {
                  normal: {
                    color: '#737b89',
                    font: {
                      family: '',
                      size: 14,
                      style: 'normal',
                      weight: 'normal',
                    },
                    height: 58,
                    padding: { bottom: '', left: '', right: '', top: '' },
                    width: 132,
                  },
                },
                SelectTabPan: {
                  normal: {
                    color: '#0052db',
                    font: {
                      family: '',
                      size: 14,
                      style: 'normal',
                      weight: 'normal',
                    },
                  },
                },
              },
              WindowContainer: {
                normal: {
                  background: { color: '#F0F2F5' },
                  padding: { bottom: '2', left: '2', right: '', top: '2' },
                },
              },
            },
          }}
        >
          <Tabs
            viewClass="wbGmRn0"
            data={[
              {
                content: 'content',
                icon: 'icon',
                key: '1',
                suffixIcon: 'suffixIcon',
                title: '待办事项',
              },
              {
                content: 'content',
                icon: 'icon',
                key: '2',
                suffixIcon: 'suffixIcon',
                title: '消息通知',
              },
              {
                content: 'content',
                icon: 'icon',
                key: '3',
                suffixIcon: 'suffixIcon',
                title: '我的收藏',
              },
              {
                content: 'content',
                icon: 'icon',
                key: '4',
                suffixIcon: 'suffixIcon',
                title: '资源下载',
              },
              {
                content: 'content',
                icon: 'icon',
                key: '5',
                suffixIcon: 'suffixIcon',
                title: '我的收藏',
              },
              {
                content: 'content',
                icon: 'icon',
                key: '6',
                suffixIcon: 'suffixIcon',
                title: '资源下载',
              },
            ]}
            defaultActivityValue=""
            forceRender=""
            pagedType={'single'}
            showAddBtn=""
            showDeleteBtn=""
            tabPosition={'top`'}
            tabType={'window'}
          />
        </Theme>
        <Theme config={tabpanTheme}>
          <p style={{ titleStyle }}>tabpanTheme</p>
          <ContainerBox>
            <Tabs
              tabType={'card'}
              data={hasActivityValueData}
              showDeleteBtn={true}
              showAddBtn={true}
              addIcon={'lugia-icon-direction_logout'}
            />
          </ContainerBox>
          <ContainerBox>
            <Tabs
              // tabType={'card'}
              data={hasActivityValueData}
              showDeleteBtn={true}
              showAddBtn={true}
              addIcon={'lugia-icon-direction_logout'}
            />
          </ContainerBox>

          <ContainerBox>
            <Tabs
              // tabType={'card'}
              tabPosition={'bottom'}
              data={hasActivityValueData}
              showDeleteBtn={true}
              showAddBtn={true}
              addIcon={'lugia-icon-direction_logout'}
            />
          </ContainerBox>

          <ContainerBox>
            <Tabs
              // tabType={'card'}
              tabPosition={'left'}
              data={hasActivityValueData}
              showDeleteBtn={true}
              showAddBtn={true}
              addIcon={'lugia-icon-direction_logout'}
            />
          </ContainerBox>

          <ContainerBox>
            <Tabs
              // tabType={'card'}
              tabPosition={'right'}
              data={hasActivityValueData}
              showDeleteBtn={true}
              showAddBtn={true}
              addIcon={'lugia-icon-direction_logout'}
            />
          </ContainerBox>

          <ContainerBox>
            <Tabs
              tabType={'window'}
              data={hasActivityValueData}
              showDeleteBtn={true}
              showAddBtn={true}
              addIcon={'lugia-icon-direction_logout'}
            />
          </ContainerBox>
        </Theme>
        <Theme config={IconTheme}>
          <p style={{ titleStyle }}>IconTheme</p>
          <ContainerBox>
            <Tabs
              tabType={'card'}
              data={hasActivityValueData}
              showDeleteBtn={true}
              showAddBtn={true}
              addIcon={'lugia-icon-direction_logout'}
            />
          </ContainerBox>
          <ContainerBox>
            <Tabs
              tabType={'window'}
              data={hasActivityValueData}
              showDeleteBtn={true}
              showAddBtn={true}
              deleteIcon={'lugia-icon-financial_abort'}
            />
          </ContainerBox>
          <ContainerBox>
            <Tabs
              tabPosition={'left'}
              data={hasActivityValueData}
              showDeleteBtn={true}
              showAddBtn={true}
              pageArrowIcon={{
                preIcon: 'lugia-icon-direction_rollback',
                suffixIcon: 'lugia-icon-direction_enter',
              }}
            />
          </ContainerBox>
        </Theme>
        <p style={{ titleStyle }}>default IconTheme</p>
        <ContainerBox>
          <Tabs
            tabType={'card'}
            data={hasActivityValueData}
            showDeleteBtn={true}
            showAddBtn={true}
            addIcon={'lugia-icon-direction_logout'}
          />
        </ContainerBox>
        <ContainerBox>
          <Tabs
            tabType={'window'}
            data={hasActivityValueData}
            showDeleteBtn={true}
            showAddBtn={true}
            deleteIcon={'lugia-icon-financial_abort'}
          />
        </ContainerBox>
        <ContainerBox>
          <Tabs
            tabPosition={'left'}
            data={hasActivityValueData}
            showDeleteBtn={true}
            showAddBtn={true}
            pageArrowIcon={{
              preIcon: 'lugia-icon-direction_rollback',
              suffixIcon: 'lugia-icon-direction_enter',
            }}
          />
        </ContainerBox>

        <Theme config={borderTheme}>
          <p style={{ titleStyle }}>borderTheme</p>
          <ContainerBox>
            <Tabs showDividerLine={true}>
              <Tabpane
                title={'1111'}
                value={'0'}
                icon={'lugia-icon-financial_heart'}
                suffixIcon={'lugia-icon-financial_like'}
              />
              <Tabpane title={'2222'} showDeleteBtn={true} />
            </Tabs>
          </ContainerBox>
          <ContainerBox>
            <Tabs showDividerLine={true} tabPosition={'left'}>
              <Tabpane title={'1111'} value={'0'} />
              <Tabpane title={'2222'} showDeleteBtn={true} />
            </Tabs>
          </ContainerBox>
        </Theme>

        <Theme config={updateTheme}>
          <ContainerBox>
            <Tabs>
              <Tabpane title={'1111'} value={'0'} />
              <Tabpane title={'2222'} showDeleteBtn={true} />
            </Tabs>
          </ContainerBox>
          <ContainerBox>
            <Tabs tabPosition={'bottom'}>
              <Tabpane title={'1111'} value={'0'} />
              <Tabpane title={'2222'} showDeleteBtn={true} />
            </Tabs>
          </ContainerBox>
          <ContainerBox>
            <Tabs tabType={'card'} data={defaulttestDelayData} showDeleteBtn={true} />
          </ContainerBox>
          <ContainerBox>
            <Tabs
              tabType={'card'}
              data={defaulttestDelayData}
              showDeleteBtn={true}
              forceRender={true}
            />
          </ContainerBox>
          <ContainerBox>
            <Tabs tabType={'window'} data={defaulttestDelayData} showDeleteBtn={true} />
          </ContainerBox>

          <Tabs tabPosition={'left'} data={defaulttestDelayData} />
        </Theme>

        <Theme config={cardView}>
          <div>
            <p style={{ titleStyle }}>tabType=card pagedType=single</p>
            <Tabs
              tabType={'card'}
              pagedType={'single'}
              data={hasActivityValueData}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              showDeleteBtn={true}
            />
          </div>
          <br />
        </Theme>
        <Tabs tabType={'card'} />
        <br />
        <Tabs tabType={'window'} />
        <Theme config={lineViewBot}>
          <div>
            <p style={{ ...titleStyle }}>defaultData pagedType=single forceRender=true </p>
            <Tabs
              tabType={'line'}
              tabPosition={'top'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              pagedType={'single'}
              forceRender={true}
              data={testDelayData}
            />
          </div>
          <div>
            <p style={{ ...titleStyle }}>defaultData pagedType=single forceRender=false </p>
            <Tabs
              tabType={'line'}
              tabPosition={'top'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              pagedType={'single'}
              activityValue={activityValue}
              onChange={this.onChange}
              data={testDelayData}
            />
          </div>

          <div>
            <p style={{ ...titleStyle }}>height 60 </p>
            <Tabs
              tabType={'line'}
              tabPosition={'top'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              defaultData={defaultData}
              pagedType={'single'}
            />
          </div>
          <div>
            <p style={{ ...titleStyle }}>suffixIcon </p>
            <Tabs tabType={'line'} tabPosition={'top'} data={suffixData} />
          </div>
          <div>
            <p style={{ ...titleStyle }}>disabled </p>
            <Tabs tabType={'line'} tabPosition={'top'} data={disabledData} />
          </div>
          <div>
            <p style={{ ...titleStyle }}>data tabPosition=top</p>
            <Tabs
              tabType={'line'}
              tabPosition={'top'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              children={children}
              data={defaultData}
            />
          </div>
        </Theme>

        <Theme config={lineViewTop}>
          <div>
            <p style={{ ...titleStyle }}>defaultData pagedType=page</p>
            <Tabs
              tabType={'line'}
              tabPosition={'bottom'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              children={hasActivityValueChildren}
              pagedType={'page'}
            />
          </div>
          <p style={{ ...titleStyle }}>children tabPosition=bottom</p>
          <div>
            <Tabs
              tabType={'line'}
              tabPosition={'bottom'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              pagedType={'single'}
              children={longChildren}
            />
          </div>
          <p style={{ ...titleStyle }}>children tabPosition=bottom</p>
          <div>
            <Tabs
              tabType={'line'}
              data={defaultData}
              tabPosition={'bottom'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
            />
          </div>
          <br />

          <br />
        </Theme>

        <Theme config={lineView}>
          <div>
            <p style={{ ...titleStyle }}>data tabPosition=left </p>
            <Tabs
              tabType={'line'}
              tabPosition={'left'}
              data={hasActivityValueData}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
            />
          </div>
          <div>
            <p style={{ ...titleStyle }}>children tabPosition=left pagedType = page</p>
            <Tabs
              tabType={'line'}
              tabPosition={'left'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              pagedType={'page'}
              children={hasActivityValueChildren}
            />
          </div>
          <div>
            <p style={{ ...titleStyle }}>children tabPosition=left pagedType = single</p>
            <Tabs
              tabType={'line'}
              tabPosition={'left'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              pagedType={'single'}
              children={hasActivityValueChildren}
            />
          </div>
          <div>
            <p style={{ ...titleStyle }}>data tabPosition=left </p>
            <Tabs
              tabType={'line'}
              tabPosition={'left'}
              data={hasActivityValueData}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
            />
          </div>
          <br />
        </Theme>
        <Theme config={lineViewLeft}>
          <p style={{ ...titleStyle }}>children tabPosition=right</p>
          <div>
            <Tabs
              tabType={'line'}
              tabPosition={'right'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              pagedType={'single'}
              children={shortChildren}
            />
          </div>
          <br />
          <p style={{ ...titleStyle }}>data tabPosition=right && pagedType=single</p>
          <div>
            <Tabs
              tabType={'line'}
              tabPosition={'right'}
              data={hasActivityValueData}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              defaultActivityValue={'2'}
            />
          </div>
          <br />
        </Theme>

        <Theme config={cardView}>
          <div>
            <p style={{ ...titleStyle }}>tabType=card pagedType=single</p>
            <Tabs tabType={'card'} pagedType={'page'} showDeleteBtn={true} />
          </div>
          <br />
          <br />
        </Theme>

        <Theme config={cardView}>
          <div>
            <p style={{ ...titleStyle }}>
              tabType=card pagedType=single showadd 非受限 无指定增加项
            </p>
            <Tabs
              tabType={'card'}
              pagedType={'single'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              showAddBtn={true}
            />
          </div>
          <div>
            <p style={{ ...titleStyle }}>
              tabType=card pagedType=single showadd 非受限 有指定增加项
            </p>
            <Tabs
              tabType={'card'}
              pagedType={'single'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              showAddBtn={true}
              getAddItem={this.getAddItem}
            />
          </div>
          <br />
          <br />
          <div>
            <p style={{ ...titleStyle }}>tabType=card pagedType=single showadd 受限</p>
            <Tabs
              tabType={'card'}
              pagedType={'single'}
              data={data}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              showAddBtn={true}
              onAddClick={this.onAddClick}
              activityValue={activityValue}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <p style={{ ...titleStyle }}>
              defaultData pagedType=single 受限 无增加函数 内部不做处理
            </p>
            <Tabs
              tabType={'card'}
              pagedType={'single'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              showAddBtn={true}
              showDeleteBtn={true}
              getAddItem={this.getAddItem}
            >
              <Tabpane title={'酥肉'} content={<div>酥肉啊啊啊 </div>} />
              <Tabpane title={'海带'} content={<div>海带啊啊啊啊 </div>} key={'1'} />
              <Tabpane title={'土豆'} content={'土豆啊啊啊'} key={'2'} />
              <Tabpane title={'火锅'} content={<div>火锅啊啊啊啊</div>} key={'3'} />
            </Tabs>
          </div>
        </Theme>

        <Theme config={windowView}>
          <div>
            <p style={{ ...titleStyle }}>tabType=window pagedType=page 受限 delete</p>
            <Tabs
              tabType={'window'}
              pagedType={'page'}
              data={dataWindow}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              showDeleteBtn={true}
              onDelete={this.onDelete}
              onTabClick={this.onTabClick}
            />
          </div>
          <div>
            <p style={{ ...titleStyle }}>tabType=window pagedType=page 非受限 delete</p>
            <Tabs
              tabType={'window'}
              pagedType={'page'}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
              showDeleteBtn={true}
            />
          </div>
        </Theme>
      </div>
    );
  }
}
