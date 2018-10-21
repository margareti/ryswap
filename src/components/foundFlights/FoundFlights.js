import React, { Component } from 'react';



class FoundFlights extends Component {

state = {}

submitForm = (evt) => {
  evt.preventDefault()
  console.log(this.state.selectedFlight)

}

handleSelectFlight = (evt) => {
  this.setState({selectedFlight: evt.target.value})
}


render() {
  console.log(this.props.foundFlights)
  if(!this.props.foundFlights) {
    return null;
  }
  return(
    <div>
      <form>
        {this.props.foundFlights.map(flight => (
          <div key={flight.id}> 
          {/* {flight.origin} => {flight.destination} */}
            {flight.flightDate} | {flight.flightRouteTime.time} 
            <input type="radio" name="foundFlight" value={flight.id} onChange={this.handleSelectFlight}/>
          </div>
        ) )}
        <button onClick={this.submitForm} type="submit" disabled={!this.state.selectedFlight}>Select Flight</button>
      </form>
    </div>
  )
}
}

export default FoundFlights;