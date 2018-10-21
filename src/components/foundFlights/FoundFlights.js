import React, { Component } from 'react';
import moment from 'moment'
import {connect} from 'react-redux'
import {addFlightToUser} from '../../actions/actions'
import './foundFlights.scss';
import '../form/form.scss';


class FoundFlights extends Component {

state = {}

submitForm = (evt) => {
  evt.preventDefault()
  console.log(this.state.selectedFlight)
  this.props.addFlightToUser(this.state.selectedFlight)

}

handleSelectFlight = (evt) => {
  this.setState({selectedFlight: evt.target.value})
}

componentDidMount() {
  this.setState({selectedFlight : this.props.foundFlights[0].id})
}

render() {
  console.log(this.props.foundFlights)
  if(!this.props.foundFlights) {
    return null;
  }
const firstFlight = this.props.foundFlights[0];

  return(
    
    <div>
      <form>
        <div className="found-flights__title">{firstFlight.origin.airportName} => {firstFlight.destination.airportName} on {moment(firstFlight.datetime).format('dddd DD/MM/YY')}</div>
        {this.props.foundFlights.map(flight => (
          <div key={flight.id} >
            <label className="found-flights__row">
              { moment(flight.datetime).format('HH:mm')} 
             <input type="radio" name="foundFlight" value={flight.id} 
              onChange={this.handleSelectFlight} 
              checked={flight.id === this.state.selectedFlight}/>
            </label>
          </div>
        ) )}
        <button onClick={this.submitForm} 
          type="submit" className="form__submit" 
          disabled={!this.state.selectedFlight}>Select Flight</button>
      </form>
    </div>
  )
}
}

export default connect(null, {addFlightToUser})(FoundFlights);