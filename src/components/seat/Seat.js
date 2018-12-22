import React, { Component } from 'react';
import './seat.scss';

class Seat extends Component {

  click = () => {
    if (this.props && this.props.selectionListener) {
      this.props.selectionListener(this.props.seat.id)
    }
  }
  render() {
    const { seat, ownSeat, occupied, selected } = this.props;
    return (
      <span className={`seat ${ownSeat && 'seat--own'} ${occupied && 'seat--occupied'}  ${selected && 'seat--selected'}` } 
        onClick={this.click}>
        {seat.row}
        {seat.column}
      </span>
    );
  }
}
export default Seat;
