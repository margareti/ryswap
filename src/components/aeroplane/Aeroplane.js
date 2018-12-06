import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../mySeats/my-seats.scss';
import Seat from '../seat/Seat';
import Popup from '../popup/Popup';
import SwapRequestBlock from '../swapRequestBlock/SwapRequestBlock';

class Aeroplane extends Component {
  state = {};

  setSelectedSeat = (seat) => {
    this.setState({
      selectedSeat: seat
    })
  }

  render() {
    const fomattedSeats = formatAeroplaneSeats(this.props.seats);
    return (
      <div>
        {fomattedSeats.map((row, index) => (
          <div key={`row${index}`} className="my-seats my-seats--left-align" style={{ marginTop: '5px' }}>
            {' '}
            {index + 1}:
            {row.map(seat => (
              <Seat
                key={seat.seat.id}
                seat={seat.seat}
                ownSeat={seat.belongsToUser}
                occupied={seat.occupied && !seat.belongsToUser}
                onClick={() => this.setSelectedSeat(seat)}
              />
            ))}
          </div>
        ))}
         { this.state.selectedSeat &&
            <Popup close={() => this.setSelectedSeat(null)}>  
              <SwapRequestBlock 
                seat={this.state.selectedSeat.seat}
                seats={this.props.seats.filter(seat => seat.belongsToUser).map(mySeat => mySeat.seat) }/>
            </Popup>
         }

      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  seats: state.flightSeats.seats
});

export default connect(mapStateToProps)(Aeroplane);

function formatAeroplaneSeats(seats) {
  const aeroplaneSeats = [];
  const columns = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5
  };
  seats.forEach(item => {
    const seat = item.seat.column;
    const row = item.seat.row - 1;
    if (!aeroplaneSeats[row]) {
      aeroplaneSeats[row] = [];
    }
    aeroplaneSeats[row][columns[seat]] = item;
  });
  return aeroplaneSeats;
}
