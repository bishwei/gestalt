// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Touchable.css';

type Shape =
  | 'square'
  | 'rounded'
  | 'pill'
  | 'circle'
  | 'roundedTop'
  | 'roundedBottom'
  | 'roundedLeft'
  | 'roundedRight';

type MouseCursor =
  | 'copy'
  | 'grab'
  | 'grabbing'
  | 'move'
  | 'noDrop'
  | 'pointer'
  | 'zoomIn'
  | 'zoomOut';

type Props = {|
  children?: any,
  fullWidth?: boolean,
  mouseCursor?: MouseCursor,
  onMouseEnter?: ({ event: SyntheticMouseEvent<> }) => void,
  onMouseLeave?: ({ event: SyntheticMouseEvent<> }) => void,
  onTouch?: ({ event: SyntheticMouseEvent<> }) => void,
  shape?: Shape,
|};

const SPACE_CHAR_CODE = 32;
const ENTER_CHAR_CODE = 13;

export default class Touchable extends React.Component<Props> {
  handleKeyPress = (event: SyntheticMouseEvent<>) => {
    // Check to see if space or enter were pressed
    if (
      this.props.onTouch &&
      (event.charCode === SPACE_CHAR_CODE || event.charCode === ENTER_CHAR_CODE)
    ) {
      // Prevent the default action to stop scrolling when space is pressed
      event.preventDefault();
      if (this.props.onTouch) {
        this.props.onTouch({ event });
      }
    }
  };

  render() {
    const {
      children,
      fullWidth = true,
      mouseCursor = 'pointer',
      onMouseEnter,
      onMouseLeave,
      onTouch,
      shape = 'square',
    } = this.props;

    const classes = classnames(
      styles.touchable,
      styles[mouseCursor],
      styles[shape],
      {
        [styles.fullWidth]: fullWidth,
      }
    );

    return (
      <div
        className={classes}
        onClick={event => onTouch && onTouch({ event })}
        onMouseEnter={event => onMouseEnter && onMouseEnter({ event })}
        onMouseLeave={event => onMouseLeave && onMouseLeave({ event })}
        onKeyPress={this.handleKeyPress}
        role="button"
        tabIndex="0"
      >
        {children}
      </div>
    );
  }
}

Touchable.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  mouseCursor: PropTypes.oneOf([
    'copy',
    'grab',
    'grabbing',
    'move',
    'noDrop',
    'pointer',
    'zoomIn',
    'zoomOut',
  ]),
  onTouch: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  shape: PropTypes.oneOf([
    'square',
    'rounded',
    'pill',
    'circle',
    'roundedTop',
    'roundedBottom',
    'roundedLeft',
    'roundedRight',
  ]),
};
