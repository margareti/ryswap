import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import '../mySeats/my-seats.scss';
import Seat from '../seat/Seat';
import Popup from '../popup/Popup';
import SwapRequestBlock from '../swapRequestBlock/SwapRequestBlock';
import {getFlightSeats, getUserFlights}  from '../../actions/actions';
import '../../components/block/block.scss';
import { FlightInfo } from '../flightInfo/FlightInfo';
import BackButton from '../backButton/BackButton';

class Aeroplane extends Component {
  state = {};

  setSelectedSeat = (seat) => {
    this.setState({
      selectedSeat: seat
    })
  }

  componentDidMount() {
    if (this.props.match && this.props.match.params) {
      const flightId = this.props.match.params.id;
      this.props.getFlightSeats(flightId);
    }
    if(!this.props.flight) {
      this.props.getUserFlights();
    }
  }

  get flightInfo() {
    return (
      this.props.flight && <Fragment>
        <FlightInfo flight={this.props.flight}/>
      </Fragment>
    )
  }

  render() {
    const fomattedSeats = formatAeroplaneSeats(this.props.seats);
    return (
      <div className="block">
        <BackButton clickHandler={this.props.history.goBack}/>
        <h2>Flight Information </h2>
        {this.flightInfo}
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
                selectionListener={() => this.setSelectedSeat(seat)}
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

const mapStateToProps = (state, ownProps) => ({ 
  seats: state.flightSeats.seats,
  flight: getFlightById(state.myFlights.flights, ownProps.match.params.id)
});

export default connect(mapStateToProps, {getFlightSeats, getUserFlights})(Aeroplane);

function getFlightById(flights, flightId) {
  const id = parseInt(flightId, 10);
  return flights.find(flight => {return flight.id === id})
}

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
