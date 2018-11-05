import React, {Component} from 'react';
import './my-seats.scss';

class MySeats extends Component {
  render() {
    if (!this.props.seats || !this.props.seats.length) {
      return null;
    }
    return (
      <div className="my-seats">
        {this.props.seats.map(seat => {
          return <span key={seat.id} className="my-seats__seat">{seat.row}{seat.column}</span>
        })}

      </div>
    )
  }
}

export default MySeats;