/**
 * 标签tag
 * create by szfeng
 *
 * @flow
 */

import React from 'react';
import Widget from '../consts/index';
import ThemeHoc from '@lugia/theme-hoc';
import Icon from '../icon';
import { deepMerge } from '@lugia/object-utils';
import { TagWrap, OptionalWrap, ItemText, FlexBox, fontSize, paddingToText } from '../css/tag';

type shapeType = 'basic' | 'round';
type styleType = 'customs' | 'primary' | 'basic' | 'presets' | 'optional';
type TagProps = {
  closable?: boolean,
  checked: boolean,
  children: any,
  onClick?: Function,
  onClose?: Function,
  shape: shapeType,
  getTheme: Function,
  type: styleType,
  themeProps: Object,
  text: String,
  getPartOfThemeProps: Function,
  getPartOfThemeHocProps: Function,
  closeIcon: string,
  preIcon: string,
  suffixIcon: string,
};

type TagState = {
  isClose: boolean,
  checked: boolean,
};

const getChecked = (props: TagProps, state: any) => {
  const isCheckedInProps = 'checked' in props;
  if (isCheckedInProps) {
    return props.checked;
  }

  return state ? state.checked : false;
};

class Tag extends React.Component<TagProps, TagState> {
  static displayName = Widget.Tag;
  static defaultProps = {
    getTheme: () => {
      return {};
    },
    closable: false,
    shape: 'basic',
    type: 'customs',
  };
  constructor(props: TagProps) {
    super(props);

    this.state = {
      isClose: false,
      checked: getChecked(props, null),
    };
  }

  static getDerivedStateFromProps(props: TagProps, state: TagState) {
    if (!state) {
      return {};
    }

    return {
      checked: getChecked(props, state),
    };
  }

  itemText: Object;

  render() {
    const { isClose, checked } = this.state;
    const {
      getPartOfThemeProps,
      type,
      shape,
      closable = false,
      closeIcon = 'lugia-icon-reminder_close',
      preIcon = '',
      suffixIcon = '',
      getPartOfThemeHocProps,
    } = this.props;

    const params = {
      shape,
      type,
      isClose,
      closable,
      checked,
    };

    const themeProps =
      type === 'optional' && checked
        ? getPartOfThemeProps('CheckedTagWrap', { props: params })
        : getPartOfThemeProps('Container', { props: params });
    const { viewClass: preIconViewClass, theme: preTheme } = getPartOfThemeHocProps('PreIcon');
    const { viewClass: SuffixIconViewClass, theme: SuffixIconTheme } = getPartOfThemeHocProps(
      'SuffixIcon'
    );
    const tagText = getPartOfThemeProps('TagText');
    const value = this.getValue();
    return type === 'optional' ? (
      <OptionalWrap onClick={this.onClick} themeProps={themeProps}>
        <FlexBox>
          <Icon
            {...this.getIconTheme(preIconViewClass, preTheme, false)}
            singleTheme
            iconClass={preIcon}
          />
          <ItemText themeProps={tagText} ref={cmp => (this.itemText = cmp)} type={type}>
            {value}
          </ItemText>
          <Icon
            {...this.getIconTheme(SuffixIconViewClass, SuffixIconTheme, true)}
            singleTheme
            iconClass={suffixIcon}
          />
        </FlexBox>
      </OptionalWrap>
    ) : (
      <TagWrap onClick={this.onClick} themeProps={themeProps}>
        <FlexBox>
          <Icon
            {...this.getIconTheme(preIconViewClass, preTheme, false)}
            singleTheme
            iconClass={preIcon}
          />
          <ItemText themeProps={tagText} ref={cmp => (this.itemText = cmp)} type={type}>
            {value}
          </ItemText>
          <Icon
            {...this.getIconTheme(SuffixIconViewClass, SuffixIconTheme, true)}
            singleTheme
            iconClass={suffixIcon}
          />
          {closable ? (
            <Icon
              {...this.getCloseTheme('CloseButton')}
              singleTheme
              iconClass={closeIcon}
              onClick={this.onCloseClick.bind(this)}
            />
          ) : null}
        </FlexBox>
      </TagWrap>
    );
  }

  getValue = () => {
    const { text, children } = this.props;
    if (text) {
      return text.toString();
    }
    if (children) {
      return children;
    }
    return 'Tag';
  };

  getCloseTheme = (target: string) => {
    const { getPartOfThemeHocProps } = this.props;
    const { viewClass, theme } = getPartOfThemeHocProps(target);
    const { normal = {}, hover = {} } = theme[viewClass];
    normal.padding = {};
    hover.margin = {};
    const iconTheme = deepMerge(
      {
        [viewClass]: {
          normal: {
            font: { size: fontSize },
            margin: {
              left: 4,
            },
          },
        },
      },
      theme
    );

    return {
      viewClass,
      theme: iconTheme,
    };
  };
  getIconTheme = (viewClass, iconTheme, isSuffix) => {
    const iconMergeTheme = deepMerge(
      {
        [viewClass]: {
          normal: {
            ...this.getIconStyle(isSuffix),
          },
        },
      },
      iconTheme
    );
    return {
      viewClass,
      theme: iconMergeTheme,
    };
  };

  getIconStyle = isSuffix => {
    if (isSuffix) {
      return { margin: { left: paddingToText } };
    }
    return { margin: { right: paddingToText } };
  };
  onCloseClick(e) {
    e.stopPropagation();

    this.setState({
      isClose: true,
    });
    const { onClose } = this.props;
    setTimeout(() => {
      onClose && onClose(e);
    }, 150);
  }

  onClick = (e: Object) => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
    const { onClick } = this.props;
    onClick && onClick(e, !checked);
  };
}

export default ThemeHoc(Tag, Widget.Tag, { hover: true, active: true });
