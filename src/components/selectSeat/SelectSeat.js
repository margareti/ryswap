import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { addMySeats } from '../../actions/actions';
import '../button/button.scss';

class SelectSeat extends Component {
  state = {};

  updateSelectedSeats = seats => {
    this.setState({ seats });
  };

  submitSeats = () => {
    const formattedSeats = this.state.seats.map(seat => seat.value);
    this.props.addMySeats(this.props.flightId, formattedSeats);
    this.props.close();
  };

  render() {
    return (
      <div>
        <p>
          {this.props.myCurrentSeats.mySeats.length ? 'Edit ' : 'Choose '}
          your seats:{' '}
        </p>
        <Select
          options={this.props.seats}
          isMulti
          closeMenuOnSelect={false}
          onChange={this.updateSelectedSeats}
          defaultValue={formatTargetSeats(this.props.myCurrentSeats.mySeats)}
        />
        <button
          style={{ marginTop: '14px' }}
          className="button"
          disabled={!this.state.seats}
          onClick={this.submitSeats}>
          Those are my seats, I swear.
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  seats: formatSeats(state.flightSeats.seats),
  myCurrentSeats: getMySeatsFromFlight(state.myFlights.flights, ownProps.flightId)
});

function formatSeats(seats) {
  if (!seats) return null;
  return seats
    .filter(seat => !seat.occupied)
    .map(seat => ({ value: seat.seat.id, label: `${seat.seat.row}${seat.seat.column}` }));
}

function formatTargetSeats(seats) {
  return seats.map(seat => ({ value: seat.id, label: `${seat.row}${seat.column}` }));
}

function getMySeatsFromFlight(flights, flightId) {
  return flights.find(flight => {
    return flight.id === flightId;
  });
}

export default connect(
  mapStateToProps,
  { addMySeats }
)(SelectSeat);
