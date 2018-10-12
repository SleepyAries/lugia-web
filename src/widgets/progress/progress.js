/**
 *
 * create by guorg
 *
 * @flow
 *
 */
import * as React from 'react';
import ThemeProvider from '../theme-provider';
import Widget from '../consts/index';
import type { ProgressProps, ProgressState } from '../css/progress';
import {
  Wrap,
  Progress,
  ProgressBackground,
  ProgressText,
  Icons,
  InsideText,
} from '../css/progress';

export default ThemeProvider(
  class extends React.Component<ProgressProps, ProgressState> {
    render() {
      const {
        type = 'line',
        size = 'default',
        status = 'default',
        showType = 'default',
        percent = 0,
        showInfo = true,
        successPercent,
        format = (percent, successPercent) => percent + '%',
        getTheme,
      } = this.props;
      return (
        <Wrap theme={getTheme()}>
          <Progress showInfo={showInfo} showType={showType}>
            <ProgressBackground
              theme={getTheme()}
              showType={showType}
              percent={percent}
              status={status}
              size={size}
            >
              {showType === 'default' ? null : (
                <InsideText showType={showType}>{this.getText(true)}</InsideText>
              )}
            </ProgressBackground>
          </Progress>
          {showInfo && showType === 'default' ? (
            <ProgressText size={size} status={status}>
              {this.getText()}
            </ProgressText>
          ) : null}
        </Wrap>
      );
    }
    getText = (inside?: boolean) => {
      const { percent = 0, successPercent, format, status, size = 'default' } = this.props;
      const hasFormat = this.hasFormat();
      if (hasFormat && typeof format === 'function') {
        return format(percent, successPercent);
      } else if (status === 'success' || percent >= 100) {
        return (
          <Icons
            size={size}
            iconClass={inside ? 'lugia-icon-reminder_check' : 'lugia-icon-reminder_check_circle'}
          />
        );
      } else if (status === 'error') {
        return (
          <Icons
            size={size}
            iconClass={inside ? 'lugia-icon-reminder_close' : 'lugia-icon-reminder_close_circle'}
          />
        );
      }

      return `${percent}%`;
    };
    hasFormat() {
      return 'format' in this.props;
    }
  },
  Widget.Progress
);
