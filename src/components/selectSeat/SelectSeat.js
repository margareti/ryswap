import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select'


class SelectSeat extends Component {


  updateSelectedSeats = (evt) => {
    console.log('selected seats ', evt)
  }

  render(){
    return (
    <div>
      <p>Enter your seats: </p>
      <Select options={this.props.seats} isMulti 
              closeMenuOnSelect={false} 
              onChange={this.updateSelectedSeats}/>
      <p><button>Add</button></p>
      
    </div>
  )}
}

const mapStateToProps = state =>  (
  {seats: formatSeats(state.myFlights.seats)}
)

function formatSeats(seats) {
  return seats.map(seat => ({value: seat.seat.id, label: seat.seat.seatNumber}))
}

export default connect(mapStateToProps)(SelectSeat);