import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetUser } from '../../actions/actions';
import './navigation.scss';

class Navigation extends Component {
  handleLogout = () => {
    this.props.resetUser();
  };

  render() {
    return (
      <div className="navigation">
        <button className="navigation__button" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { resetUser }
)(Navigation);
