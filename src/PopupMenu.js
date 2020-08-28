import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import clone from 'clone';

import style from './PopupMenu.scss';

export class PopupMenu extends Component {
  static defaultProps = {
    width: 200,
    height: 'auto'
  };

  state = {
    hovered: false,
    displayable: false
  };

  static childContextTypes = {
    popupWidth: PropTypes.number
  };

  getChildContext() {
    return {
      popupWidth: this.props.width
    };
  }

  constructor(props) {
    super(props);
  }

  hover = () => {
    clearTimeout(this._diplayTimeout);
    this.setState({hovered: true, displayable: true});
  };

  unhover = () => {
    this.setState({hovered: false});
    this._diplayTimeout = setTimeout(() => this.setState({displayable: false}), 500);
  };

  configureStyles(props) {
    return {
      popover: {
        width: `calc(${props.width}px - 10px)`,
        height: props.height === 'auto' ? 'auto' : `calc(${props.height}px - 10px)`,
        left: `calc(${-props.width / 2}px + 50%)`,
        ...(props.direction === 'left' || props.direction === 'right' ? {
          top: `calc(${-props.height / 2}px + 50%)`
        } : {})
      }
    };
  }

  render() {
    return (
      <h1>HELLO HELLO</h1>
    )
  }
}
