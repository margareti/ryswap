import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { addMySeats } from '../../actions/actions';
import '../button/button.scss';

class SelectSeat extends Component {
  state = {};

  updateSelectedSeats = (seats) => {
    this.setState({seats});
  }

  submitSeats = () => {
    const formattedSeats =  this.state.seats.map(seat => seat.value);
    this.props.addMySeats(this.props.flightId, formattedSeats);
    this.props.close();
  }

  render(){
    return (
    <div>
      <p>Choose your seats: </p>
      <Select options={this.props.seats} 
        isMulti 
        closeMenuOnSelect={false} 
        onChange={this.updateSelectedSeats}/>
      <button style={{marginTop: '14px'}} 
        className="button" 
        disabled={!this.state.seats} 
        onClick={this.submitSeats}>Add</button>
    </div>
  )}
}

const mapStateToProps = state =>  (
  {seats: formatSeats(state.myFlights.seats)}
)

function formatSeats(seats) {
  return seats.map(seat => ({value: seat.seat.id, label: seat.seat.seatNumber}))
}

export default connect(mapStateToProps, {addMySeats})(SelectSeat);