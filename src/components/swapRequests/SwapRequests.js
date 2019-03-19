import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { getSwapRequests, cancelSwapRequest, declineSwapRequest, acceptSwapRequest } from '../../actions/actions';

class SwapRequests extends Component {
  componentDidMount() {
    this.props.getSwapRequests(this.props.flightId);
  }



  render() {
    if (!this.props.swapRequests) {
      return null;
    }
    return (
      <Fragment>
        <h4>Swap Requests</h4>
        <ul>
          {this.props.swapRequests.map(sw => 
          <li>
            {sw.swapRequest.currentSeat.row}{sw.swapRequest.currentSeat.column} => 
            {sw.swapRequest.targetSeat.row}{sw.swapRequest.targetSeat.column}
            { sw.incoming ? <Fragment><button onClick={() => this.props.acceptSwapRequest(sw.swapRequest.id, this.props.flightId)}>Accept</button> 
              <button onClick={() =>  this.props.declineSwapRequest(sw.swapRequest.id, this.props.flightId)}>Decline</button> </Fragment> 
              : 
              <button onClick={ () => this.props.cancelSwapRequest(sw.swapRequest.id, this.props.flightId)}>Cancel</button>}
          </li>)}
        </ul>
      </Fragment>
      )
  }
};
const mapStateToProps = (state, ownProps) => ({
  swapRequests : state.swapRequests.list.swapRequests[ownProps.flightId]
})

export default connect(mapStateToProps, {getSwapRequests, 
    cancelSwapRequest, declineSwapRequest, acceptSwapRequest})(SwapRequests);