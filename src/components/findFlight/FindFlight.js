import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser, resetUser } from '../../actions/actions';
import '../block/block.scss';
import '../form/form.scss';


class FindFlight extends Component {

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
            <label>From </label>  <input type="text" name="flightOrigin"/>
          </fieldset>
          <fieldset className="form__fieldset">
            <label>To </label> <input type="text" name="flightDestination"/>
          </fieldset>
          <fieldset className="form__fieldset  form__fieldset--block">
            <button type="submit" className="form__submit">Find flight</button>
          </fieldset>
        </form>      
      </div>
    );
  }
}

export default FindFlight;