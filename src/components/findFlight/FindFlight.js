import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRoutes, findFlights } from '../../actions/actions';
import '../block/block.scss';
import '../form/form.scss';
import Select from '../select/Select';


class FindFlight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      destinations: []
    }
  }

  componentDidMount() {
    this.props.loadRoutes();
  }

  handleFlightOriginChange = (evt) => {
    this.setState({
      destinations: filterByOrigin(this.props.routes, evt.target.value),
      flightOrigin : evt.target.value
    });
  }


  handleChange = (evt) => {
    const newstate = {};
    console.log(evt.target.name, evt.target.value);
    newstate[evt.target.name] = evt.target.value;
    this.setState(newstate);
  }


  submitForm = (evt) => {
    evt.preventDefault();
    const findFlightsRequest = {
      date: this.state.flightDate,
      origin: this.state.flightOrigin,
      destination: this.state.flightDestination
    }
    console.log('find flight request: ', findFlightsRequest)
    this.props.findFlights(findFlightsRequest)
  }

  validateForm = () =>{
    return this.state.flightDate && this.state.flightOrigin && this.state.flightDestination
  }

  render(){
    return(
      <div className="block">
        <h4 className="block__title">Find your next flight</h4>
        <form className="form" onSubmit={this.submitForm}>
          <fieldset className="form__fieldset">
            <label>Flight number </label>  <input type="text" name="flightNumber"/>
          </fieldset>
          <fieldset className="form__fieldset">
            <label>Date </label> <input type="date" name="flightDate" onChange={this.handleChange}/>
          </fieldset>
          <fieldset className="form__fieldset">
            <label>From </label>  
            <Select  options={this.props.airports} handleChange={this.handleFlightOriginChange} displayName="airportName" name="flightOrigin"/>
          </fieldset>
          <fieldset className="form__fieldset">
            <label>To </label> 
            <Select options={this.state.destinations} handleChange={this.handleChange}  displayName="airportName" name="flightDestination"/>
          </fieldset>
          <fieldset className="form__fieldset  form__fieldset--block">
            <button type="submit" disabled={!this.validateForm()} className="form__submit">Find flight</button>
          </fieldset>
        </form>      
      </div>
    );
  }
} 

const mapStateToProps = state => {
  return {
    routes: state.routes.routes,
    airports: buildListOfAirports(state.routes.routes)
  }
}

function buildListOfAirports(routes) {
  let airports = [];
  routes.forEach(route => {
    if (!airports.find(airport => airport.id === route.origin.id)) {
      airports.push(route.origin);
    } 
  });
  return airports;
}

function filterByOrigin(routes, originId) {
  let destinations = [];
  routes.forEach(
    route => {
      if (route.origin.id === parseInt(originId, 10)) {
        destinations.push(route.destination)
      }
    }
  );
  return destinations;
}

export default connect(mapStateToProps, {loadRoutes, findFlights})(FindFlight);