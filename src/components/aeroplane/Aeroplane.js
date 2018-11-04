import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRoutes, findFlights } from '../../actions/actions';
import '../mySeats/my-seats.scss';

class Aeroplane extends Component {

state = {}



render(){
  return(
    <div >
      {this.props.seats.map( (row, index) => (
        <div key={row+index} className="my-seats my-seats--left-align" style={{marginTop: '5px'}}> {index + 1}:
          {row.map(seat => (
          <span className="my-seats__seat" key={seat.seat.id}>{seat.seat.seatNumber}</span>
        ))}
        </div>
      ))}


      

    </div>
  )
}

}

const mapStateToProps = state => (
{seats : formatAeroplaneSeats(state.myFlights.seats)}
)

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
  }
  seats.forEach((item) => {
    const seatArr = item.seat.seatNumber.split('');
    const seat = seatArr.pop();
    const row = parseInt(seatArr.join(''), 10);
    if (!aeroplaneSeats[row]) {aeroplaneSeats[row] = []};

    aeroplaneSeats[row][columns[seat]] = item;
  })
  aeroplaneSeats.shift();
  return aeroplaneSeats;
}