/**
 *
 * create by guorg
 *
 * @flow
 *
 */
import * as React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import {
  Notification,
  Content,
  CloseIconWrap,
  CloseIcon,
  Title,
  Text,
  Icons,
} from '../css/notification';
import type { NotificationProps, NotificationState } from '../css/notification';
import { IconInfo } from '../css/modal';

export default class extends React.Component<NotificationProps, NotificationState> {
  timer: any;
  constructor() {
    super();
    this.state = {
      visible: true,
      opening: true,
      closing: false,
    };
  }
  componentDidMount() {
    const { duration } = this.props;
    const time = this.handleDuration(duration);
    if (typeof time === 'number') {
      this.timer = setTimeout(this.handleClose, time * 1000);
    }
  }
  handleDuration = (duration?: number | null) => {
    if (typeof duration !== 'undefined') {
      if (duration === 0 || duration === null) {
        return 'no';
      }
      return duration;
    }
    return 4.5;
  };

  render() {
    const { icon, iconType, title, description } = this.props;
    const { visible, opening, closing } = this.state;
    const { placement = 'topRight' } = this.props;
    if (visible) {
      return (
        <Notification
          needIcon={this.needIcon()}
          opening={opening}
          closing={closing}
          placement={placement}
        >
          {this.needIcon() ? (
            <Icons
              iconClass={iconType ? IconInfo[iconType].class : icon}
              iconColor={iconType && IconInfo[iconType].color}
            />
          ) : null}
          <Content>
            <Title>{title}</Title>
            <Text>{description}</Text>
          </Content>
          <CloseIconWrap onClick={this.handleClose}>
            <CloseIcon iconClass="lugia-icon-reminder_close" />
          </CloseIconWrap>
        </Notification>
      );
    }
    return null;
  }
  handleClose = () => {
    const { closing } = this.state;
    if (closing) {
      return;
    }
    clearTimeout(this.timer);
    this.setState({
      opening: false,
      closing: true,
    });
    setTimeout(() => {
      this.setState({
        closing: false,
        visible: false,
      });
      this.removeDom();
    }, 300);
  };
  needIcon = () => {
    const { iconType, icon } = this.props;
    if (iconType || icon) {
      return true;
    }
    return false;
  };
  removeDom = () => {
    const { parentDom, rootDom } = this.props;
    if (parentDom && rootDom) {
      unmountComponentAtNode(parentDom);
      rootDom.removeChild(parentDom);
      if (!rootDom.children.length) {
        document.body && document.body.removeChild(rootDom);
      }
    }
  };
}
