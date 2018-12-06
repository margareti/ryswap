import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Seat from '../seat/Seat';
import MySeats from '../mySeats/MySeats';

import './swapRequestBlock.scss';

class SwapRequestBlock extends Component {
 
  render() {
    return (
      <Fragment>
        <div className="swap-request-block">You have clicked on seat <Seat seat={this.props.seat} /></div>
        <div className="swap-request-block  swap-request-block--col">
          <p>Choose which seat to swap it for: </p><MySeats seats={this.props.seats}/>
        </div>
        <div className="swap-request-block__cta"><button className="button">Swap</button></div>
      </Fragment>
    );
  }
}
 

export default connect()(SwapRequestBlock);
