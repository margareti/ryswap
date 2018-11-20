import React, {Component} from 'react';
import './seat.scss';

class Seat extends Component {

  render(){
    const {seat, ownSeat, occupied} = this.props;
    return(<span className={`seat ${ownSeat && 'seat--own'} ${occupied && 'seat--occupied'}`}>{seat.row}{seat.column}</span>)
  }

}
export default Seat;