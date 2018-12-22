import React from 'react';
import moment from 'moment';

export const FlightInfo = (props) => ( {
  render(){
    const { flight } = props.flight;
  return (
    <div>
      <h4>{flight.origin.airportCode} => {flight.destination.airportCode}</h4>
      <p>{moment(flight.datetime).format('dddd DD/MM/YY @ HH:mm')}</p> 
    </div>
  )
  }

})