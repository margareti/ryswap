import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRoutes } from '../../actions/actions';
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
      destinations: filterByOrigin(this.props.routes, evt.target.value)
    });
  }


  render(){
    return(
      <div className="block">
        <h4 className="block__title">Find your next flight</h4>
        <form className="form">
          <fieldset className="form__fieldset">
            <label>Flight number </label>  <input type="text" name="flightNumber"/>
          </fieldset>
          <fieldset className="form__fieldset">
            <label>Date </label> <input type="date" name="flightDate"/>
          </fieldset>

          <fieldset className="form__fieldset">
            <label>From </label>  
            <Select  options={this.props.airports} handleChange={this.handleFlightOriginChange} displayName="airportName" name="flightOrigin"/>
          </fieldset>
          <fieldset className="form__fieldset">
            <label>To </label> 
            <Select options={this.state.destinations} displayName="airportName" name="flightDestination"/>
          </fieldset>
          <fieldset className="form__fieldset  form__fieldset--block">
            <button type="submit" className="form__submit">Find flight</button>
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

export default connect(mapStateToProps, {loadRoutes})(FindFlight);