import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Popup from '../popup/Popup'
import SelectSeat from '../selectSeat/SelectSeat'
import {getFlightSeats}  from '../../actions/actions';
import MySeats from '../mySeats/MySeats';
import '../block/block.scss';
import '../form/form.scss';
import './my-flights.scss';
import '../button/button.scss';

class MyFlights extends Component {

  state = {
    editedFlightId : null
  }

  setEditedFlightId = (flightId) => {
    this.setState({
      editedFlightId: flightId
    })
    if( flightId ) {
      this.props.getFlightSeats(flightId);
    }
  }

  render() {
    if( ! this.props.flights) {
        return null;
    }

    return (

      <div className="block">
      {this.props.flights.map(flightObj => (
        
        <div key={flightObj.id} className="my-flights__flex">
          
          <div>
            <h4>{flightObj.flight.origin.airportCode} => {flightObj.flight.destination.airportCode}</h4>
            <p>{moment(flightObj.flight.datetime).format('dddd DD/MM/YY @ HH:mm')}</p>
          </div>
          <div className="my-flights__seats-wrapper">
            <MySeats seats={flightObj.mySeats}/>
            <button className="button  button--flex" onClick={() => {this.setEditedFlightId(flightObj.flight.id)}}> 
              {/* <i className="material-icons">airplanemode_active</i> */}
              {flightObj.mySeats.length ? 'Change' : 'Add' } seats
            </button>

          </div>

        </div>
      ))}
     
        {/* <h5>EDI => BCN</h5>
        <p>24.12.2018 14:45 | F3456234</p>
        <p>
          My Seats
          <button>
            <i className="material-icons">airplanemode_active</i>
          </button>
        </p>
        <p>
          <span>23A</span>
          <span>3C</span>
          <span>3B</span>
        </p>
        <p>My Swap Requests</p>
        <p>23A => 3A</p>
        <p>My Swap Offers</p>
        <p>-</p> <p>My Swaps</p>
        <p>16C => 3B</p> */}
        { this.state.editedFlightId &&
         <Popup close={() => this.setEditedFlightId(null)}>
          <SelectSeat close={() => this.setEditedFlightId(null)} flightId={this.state.editedFlightId}/>
        </Popup>
        }
      </div>
    );
  }
}

function sortFlightsByDate(flights) {
 return flights.sort((a, b) => {return new Date(a.datetime).getTime() - new Date(b.datetime).getTime()} );
}


const mapStateToProps = state => (
  {flights: sortFlightsByDate(state.myFlights.flights)}
);

export default connect(mapStateToProps, {getFlightSeats})(MyFlights);
