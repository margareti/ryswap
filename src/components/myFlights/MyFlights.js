import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Popup from '../popup/Popup'
import SelectSeat from '../selectSeat/SelectSeat'
import {getFlightSeats}  from '../../actions/actions';
import MySeats from '../mySeats/MySeats';
import Aeroplane from '../aeroplane/Aeroplane';
import '../block/block.scss';
import '../form/form.scss';
import './my-flights.scss';
import '../button/button.scss';
import { FlightInfo } from '../flightInfo/FlightInfo';
import SwapRequests from '../swapRequests/SwapRequests';

class MyFlights extends Component {

  state = {}

  setEditedFlightId = (flightId) => {
    this.setState({
      editedFlightId: flightId
    })
    if( flightId ) {
      this.props.getFlightSeats(flightId);
    }
  }

  render() {
    if( !this.props.flights || !this.props.flights.length) {
        return null;
    }
    const addSeatsBlock = (<span className="button--flex"><i className="material-icons">airline_seat_recline_extra</i> Tell us your seats</span>)
    return (

      <div className="block block--slick">
        { this.state.editedFlightId &&
         <Popup close={() => this.setEditedFlightId(null)}>
          <SelectSeat close={() => this.setEditedFlightId(null)} flightId={this.state.editedFlightId}/>
        </Popup>
        }
        { this.state.swapFlightId &&
         <Popup close={() => this.setSwapFlightId(null)}>
          <Aeroplane mySeats={[]}/>
        </Popup>
        }
      {this.props.flights.map(flightObj => (
        
        <div key={flightObj.id} className="my-flights__flex">
          <div>
            <FlightInfo flight={flightObj} />
            <SwapRequests flightId={flightObj.id} />
          </div>
          <div className="my-flights__seats-wrapper">
            <MySeats seats={flightObj.mySeats}/>
            <button className={`button  button--flex ${flightObj.mySeats.length ? 'button--square' : ''}`}      onClick={() => {this.setEditedFlightId(flightObj.flight.id)}}> 
            
            {flightObj.mySeats.length ? <i className="material-icons">edit</i> : addSeatsBlock}
            </button>
            {flightObj.mySeats.length > 0 && (
            <div>
              <Link to={`/flight/${flightObj.flight.id}`} className="button button--flex button--square"><i className="material-icons">swap_vert</i></Link>

            </div>)}
          </div>
          
        </div>
        
      ))}
        
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
