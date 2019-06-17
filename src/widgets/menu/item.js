/**
 * 菜单
 * create by szfeng
 *
 * @flow
 */
import * as React from 'react';
import styled from 'styled-components';
import ThemeHoc from '@lugia/theme-hoc';
import Widget from '../consts/index';
import Divider from '../divider';
import { FontSize } from '../css';
import { px2remcss } from '../css/units';
import {
  blackColor,
  disableColor,
  getMenuItemHeight,
  ItemBackgroundColor,
  lightGreyColor,
  SelectIcon,
  themeColor,
  SingleItem,
} from '../css/menu';
import CheckBox from '../checkbox';
import Theme from '../theme';

const Utils = require('@lugia/type-utils');
const { ObjectUtils } = Utils;
export type SizeType = 'large' | 'default' | 'bigger';
export type MenuItemProps = {
  key?: any,
  checked: boolean,
  mutliple: boolean,
  onClick?: Function,
  onMouseEnter?: Function,
  children?: React.Node,
  disabled: boolean,
  divided: ?boolean,
  size?: 'large' | 'default' | 'bigger',
  checkedCSS?: 'none' | 'background' | 'mark' | 'checkbox',
  theme: Object,
  isFirst: boolean,
};

const getFontSize = (props: Object) => {
  const { size = 'default' } = props;
  return size === 'large' || size === 'bigger' ? px2remcss(14) : px2remcss(12);
};

const TextContainer = styled.span`
  padding: ${px2remcss(0)} ${px2remcss(8)};
  font-size: ${getFontSize};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const getMulipleCheckedStyle = (props: MenuItemProps) => {
  return props.checked
    ? `
    :after{
      color: ${themeColor};
    } 
    :hover:after{
      color: ${themeColor};
    }
    `
    : `
    :hover:after{
      color: #d0c8c8;
    }
    `;
};

const getItemColorAndBackground = (props: MenuItemProps) => {
  const { checked, disabled, checkedCSS, theme } = props;
  const { color } = theme;

  return disabled
    ? `color: ${lightGreyColor};
     font-weight: 500;`
    : checked && checkedCSS !== 'background'
    ? `
    color: ${themeColor};
    font-weight: 900;
  `
    : checked && checkedCSS === 'background'
    ? `
      color: ${blackColor};
      font-weight: 900;
      background: ${disableColor}
    `
    : `
    color: ${color};
    font-weight: 500;
  `;
};

const getIcon = props => {
  const { checkedCSS } = props;
  return `
    ${
      checkedCSS !== 'mark'
        ? ''
        : `
    &::after {
      font-family: "sviconfont" !important;
      text-rendering: optimizeLegibility;
      content: "${SelectIcon}";
      color: transparent;
      display: inline-block;
      font-size: ${FontSize};
      transform: scale(.83333333) rotate(0deg);
      zoom: 1;
      transition: all .2s ease;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: ${px2remcss(12)};
      font-weight: 700;
      font-size: ${px2remcss(16)};
      text-shadow: 0 0.1px 0, 0.1px 0 0, 0 -0.1px 0, -0.1px 0;
    }
    `
    }
  `;
};

const getHeight = (props: Object) => {
  const { size } = props;
  const itemHeight = getMenuItemHeight(size);

  return `height: ${px2remcss(itemHeight)}`;
};

const getHoverCSS = (props: Object) => {
  const { disabled, theme } = props;
  const { hover } = theme;

  return disabled
    ? ''
    : `&:hover {
    font-weight: ${hover ? hover.fontWeight : 900};
    background: ${hover ? hover.background : ItemBackgroundColor};
    color: ${hover ? hover.color : blackColor};
  }`;
};

const getCursor = (props: Object) => {
  const { disabled } = props;
  return `cursor: ${disabled ? 'not-allowed' : 'pointer'}`;
};

const getBackground = (props: Object) => {
  const { theme } = props;
  const { background } = theme;
  return `background: ${background ? background : ''}`;
};
// const SingleItem = styled.li`
//   box-sizing: border-box;
//   position: relative;
//   display: block;
//   font-weight: 400;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   transition: background 0.3s ease;
//   /* ${getIcon}; */
//   ${getHeight};
//   /* ${getCursor}; */
//   ${getHoverCSS};
//   ${getMulipleCheckedStyle};
//   ${getItemColorAndBackground};
//   ${getBackground};
// `;

const DividedWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: ${px2remcss(1)};
`;

const MutlipleItem = styled(SingleItem)`
  ${getIcon};
  ${getMulipleCheckedStyle};
`;
MutlipleItem.displayName = 'mutlipleMenuItem';

class MenuItem extends React.Component<MenuItemProps> {
  static defaultProps = {
    checked: false,
    mutliple: false,
    disabled: false,
    divided: false,
  };
  static displayName = Widget.MenuItem;

  createNewTheme(theme: Object, viewClass: string, params: Object) {
    const { normal = {}, hover = {} } = theme[viewClass];
    const { size } = params;
    const height = getMenuItemHeight(size);
    normal.height = height;
    // console.log('createNewTheme', normal);
  }

  render() {
    const {
      children,
      mutliple,
      checked,
      onClick,
      disabled,
      onMouseEnter,
      checkedCSS,
      size,
      divided,
      viewClass,
      theme,
      isFirst,
      // getPartOfThemeHocProps,
      // getPartOfThemeProps,
    } = this.props;
    // console.log('getPartOfThemeHocProps', getPartOfThemeHocProps('MenuItem'));
    console.log('theme1', theme);

    const Item = mutliple ? MutlipleItem : SingleItem;
    let title = '';
    React.Children.forEach(children, (item: Object) => {
      if (ObjectUtils.isString(item)) {
        title = item;
      }
    });
    const isCheckbox = checkedCSS === 'checkbox';
    const ItemTheme = this.createNewTheme(theme, viewClass, {
      size,
      checkedCSS,
    });
    const target = (
      <Item
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        title={title} // key值，
        checked={checked} // 选中样式
        disabled={disabled} // disabled
        divided={divided} // 是否有分割线
        checkedCSS={checkedCSS} // 选中样式
        size={size} // 高度
        viewClass={viewClass}
        theme={theme}
      >
        {divided && !isFirst ? (
          <DividedWrap>
            <Divider />
          </DividedWrap>
        ) : null}
        {isCheckbox ? (
          <Theme>
            <TextContainer>
              <CheckBox checked={checked} disabled={disabled} onChange={onClick}>
                {children}
              </CheckBox>
            </TextContainer>
          </Theme>
        ) : (
          <TextContainer size={size}>{children}</TextContainer>
        )}
      </Item>
    );

    return target;
  }
}
export default ThemeHoc(MenuItem, Widget.MenuItem, { hover: true, active: true });
