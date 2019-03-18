import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { getSwapRequests } from '../../actions/actions';

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
            { sw.incoming ? <Fragment><button>Accept</button> <button>Decline</button> </Fragment>: <button>Cancel</button>}
          </li>)}
        </ul>
      </Fragment>
      )
  }
};
const mapStateToProps = (state, ownProps) => ({
  swapRequests : state.swapRequests.list.swapRequests[ownProps.flightId]
})
export default connect(mapStateToProps, {getSwapRequests})(SwapRequests);