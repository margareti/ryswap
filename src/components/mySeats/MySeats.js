import React, {Component} from 'react';
import './my-seats.scss';
import Seat from '../seat/Seat';

class MySeats extends Component {
  render() {
    if (!this.props.seats || !this.props.seats.length) {
      return null;
    }
    return (
      <div className="my-seats">
        {this.props.seats.map(seat => {
          return <Seat  key={seat.id}  seat={seat} ownSeat/>
        })}

      </div>
    )
  }
}

export default MySeats;