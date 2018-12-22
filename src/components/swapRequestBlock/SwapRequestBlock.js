import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Seat from '../seat/Seat';
import MySeats from '../mySeats/MySeats';

import './swapRequestBlock.scss';
import { CREATE_SWAP_REQUEST, REQUEST, RESET } from '../../constants';
import Spinner from '../spinner/SpinnerComponent'

class SwapRequestBlock extends Component {

 state = {}
 
  componentWillUnmount() {
    this.props.resetSwapRequests();
  }

  handleSeatSelected = (seatId) => {
    this.setState({
        selectedOriginSeat: seatId
    })
  }

  get swapRequestPrompt() {
    return (
    <Fragment>
      <div className="swap-request-block">You have clicked on seat <Seat seat={this.props.seat} /></div>
        <div className="swap-request-block  swap-request-block--col">
      <p>Choose which seat to swap it for: </p>
      {/* <MySeats seats={this.props.seats}/> */}
      <MySeats seats ={this.props.seats} 
                selectionListener={this.handleSeatSelected}
                selectedSeat={this.state.selectedOriginSeat}/>
      </div>
      <div className="swap-request-block__cta">
        <button className="button" disabled={!this.state.selectedOriginSeat} 
        onClick={() => this.props.createSW({ fromSeatId: this.state.selectedOriginSeat, 
        toSeatId: this.props.seat.id , flightId: this.props.flightId})}>Swap</button>
      </div>
      </Fragment>
      )
  }

  get body() {
    if (this.props.successCreated) {
      return <div>successfully created a swap request</div>
    } else if (this.props.errorCreated) {
      return <div>failed to create a swap request</div>
    } else if (this.props.loading) {
      return <Spinner/>
    }
    return this.swapRequestPrompt;
  }


  render() {
    return (
      <Fragment>
        {this.body}
      </Fragment>
    );
  }
}
 
const mapDispatchToProps = dispatch =>  ({
  createSW: (swapRequest) => dispatch({
    type: CREATE_SWAP_REQUEST + REQUEST,
    payload: swapRequest
  }),
  resetSwapRequests: () => dispatch({
    type: CREATE_SWAP_REQUEST + RESET
  })
}) 


const mapStateToProps = state => ({
  flightId: state.flightSeats.flightId,
  loading: state.swapRequests.loading,
  errorCreated: state.swapRequests.error,
  successCreated: state.swapRequests.success
})
export default connect(mapStateToProps, mapDispatchToProps)(SwapRequestBlock);
