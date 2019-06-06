/**
 * Layout
 * create by guorg
 * @flow
 */
import styled, { css, keyframes } from 'styled-components';
import colorsFunc from '../css/stateColor';
import ThemeProvider from '../theme-provider';
import { px2emcss } from './units';
import Icon from '../icon';
import CSSComponent from '@lugia/theme-css-provider';

const { defaultColor, themeColor } = colorsFunc();
const FontSize = 1.2;
const em = px2emcss(FontSize);

export type BackTopProps = {
  visibilityHeight?: number,
  children?: any,
  getChildTheme: Function,
  target?: Function,
  themeProps: Object,
  icon?: string,
};
export type BackTopState = {
  fixed: boolean,
  posRight: number,
  posBottom: number,
};
type CSSProps = {
  fixed: boolean,
  theme: Object,
  posRight: number,
  posBottom: number,
  hasTarget: boolean,
};

const getFixedCSS = (props: CSSProps) => {
  const ShowKeyframe = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;
  const { fixed } = props;
  if (fixed) {
    return css`
      position: fixed;
      animation: ${ShowKeyframe} 0.4s;
    `;
  }
};
const getLeftOrRight = (props: CSSProps) => {
  const { hasTarget, posRight, posBottom } = props;
  if (hasTarget) {
    return `left: ${em(posRight)};top: ${em(posBottom)}`;
  }
  return `right: ${em(posRight)};bottom: ${em(posBottom)}`;
};
// export const BackTop = styled.div`
//   font-size: ${FontSize}rem;
//   ${getFixedCSS} ${getLeftOrRight};
//   cursor: pointer;
// `;

const getBackgroundCSS = (props: CSSProps) => {
  console.log('props', props);
  const { backgroundColor = defaultColor } = props.theme;

  return `background-color: ${backgroundColor}`;
};
// export const BackTopContent = styled.div`
//   width: ${em(40)};
//   height: ${em(40)};
//   line-height: ${em(40)};
//   border-radius: ${em(40)};
//   border: 1px solid #e8e8e8;
//   color: ${props => getThemeColor(props.theme)};
//   text-align: center;
//   overflow: hidden;
//   box-shadow: 0 0 ${em(4)} #e8e8e8;
//   ${getBackgroundCSS};
// `;
export const IconWrap: Object = styled(Icon)`
  vertical-align: bottom !important;
`;

const CommonBackTopStyle = CSSComponent({
  tag: 'div',
  className: 'a',
  css: css`
    border: 1px solid #e8e8e8;
    text-align: center;
    overflow: hidden;
    box-shadow: 0 0 ${em(4)} #e8e8e8;
  `,
});

export const BackTop = CSSComponent({
  tag: 'div',
  className: 'back-top',
  css: css`
    font-size: ${FontSize}rem;
    ${getFixedCSS};
    ${getLeftOrRight};
    cursor: pointer;
  `,
  normal: {
    selectNames: [],
  },
});

export const BackTopContent = CSSComponent({
  extend: CommonBackTopStyle,
  className: 'back-top-content',
  css: css`
    position: relative;
  `,
  normal: {
    selectNames: [
      ['background'],
      ['color'],
      ['width'],
      ['height'],
      ['borderRadius'],
      ['opacity'],
      ['border'],
    ],
    defaultTheme: {
      background: { backgroundColor: defaultColor },
      color: themeColor,
      width: 40,
      height: 40,
      borderRadius: 40,
      opacity: 1,
      border: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e8e8e8',
      },
    },
  },
});

export const IconBox = CSSComponent({
  tag: 'span',
  className: 'icon-box',
  normal: {
    selectNames: [['color']],
  },
  css: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
});

export const Icons = ThemeProvider(
  CSSComponent({
    className: 'icon',
    extend: Icon,
    normal: {
      selectNames: [['color'], ['fontSize'], ['margin'], ['padding']],
    },
    defaultTheme: {
      margin: 0,
      padding: 0,
    },
    css: css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
  }),
  'Icons'
);
