"use strict";

import { Component, PropTypes } from 'react';
import classnames from 'classnames';


class Button extends Component {
  constructor (props) {
    super(props);
    this.state = {
      disabled: this.props.disabled,
      show: null
    };
  }

  render() {
    const className = classnames(
      this.props.className,
      getGrid(this.props.grid),
      'rct-button',
      status
    );

    return (
      <button style={this.props.style}
        disabled={this.state.disabled}
        className={className}
        type={this.props.type || 'button'}>
        { this.state.show || this.props.chdren }
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  once: PropTypes.bool,
  status: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(['submit', 'button'])
};

module.exports = Button;

