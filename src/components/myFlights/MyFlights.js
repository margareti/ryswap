import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser, resetUser } from '../../actions/actions';
import '../block/block.scss';
import '../form/form.scss';

class MyFlights extends React.Component {
  render() {
    return (
      <div className="block">
        <h5>EDI => BCN</h5>
        <p>24.12.2018 14:45 | F3456234</p>
        <p>
          My Seats
          <button>
            <i className="material-icons">airplanemode_active</i>
          </button>
        </p>
        <p>
          <span>23A</span>
          <span>3C</span>
          <span>3B</span>
        </p>
        <p>My Swap Requests</p>
        <p>23A => 3A</p>
        <p>My Swap Offers</p>
        <p>-</p> <p>My Swaps</p>
        <p>16C => 3B</p>
      </div>
    );
  }
}

export default MyFlights;
