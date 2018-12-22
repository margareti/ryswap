import React, { Component } from 'react';
import './my-seats.scss';
import Seat from '../seat/Seat';

export class MySeats extends Component {
  state = {};


  render() {
    if (!this.props.seats || !this.props.seats.length) {
      return null;
    }
    return (
      <div className="my-seats">
        {this.props.seats.map(seat => {
          return <Seat key={seat.id} seat={seat} ownSeat 
              selectionListener={this.props.selectionListener} 
              selected={this.props.selectedSeat === seat.id}/>;
        })}
      </div>
    );
  }
}

export default MySeats;
