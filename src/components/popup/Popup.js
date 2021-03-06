import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './popup.scss';

class Popup extends Component {
  render() {
    return (
      <div className="popup__backdrop">
        <div className="popup">
          <button className="popup__close-button" onClick={this.props.close}>
            &times;
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  close: PropTypes.func,
  children: PropTypes.any
};

export default Popup;
