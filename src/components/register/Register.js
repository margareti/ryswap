import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { registerUser, resetRegisterPage } from '../../actions/actions';
import Popup from '../popup/Popup';

class Register extends Component {
 
  static propTypes = {
    registerUser : PropTypes.func
  }

  state = {}

  componentDidMount() {
    this.props.resetRegisterPage();
  }

  handleRegisterButton = (ev) => {
    ev.preventDefault();
    this.props.registerUser(this.state)
  }

  handleInputChange = (ev) => {
    const newState = {}
    newState[ev.target.name] = ev.target.value;
    this.setState(newState)
  }

  closePopup = () => {
    this.props.resetRegisterPage();
  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleRegisterButton}> 

          <label htmlFor="name">name: </label>
          <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} />
          <label htmlFor="email">email: </label>
          <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          <label htmlFor="regPassword">Password: </label>
          <input type="password" id="regPassword" name="password" value={this.state.password} onChange={this.handleInputChange} />

          <button type="submit">Register</button>
        </form>
        <p>Or <Link to="/login">Log in</Link> if you are already registered</p>
        {(this.props.registerSuccess || this.props.registerError) && <Popup close={this.closePopup}>
            {this.props.registerSuccess ? (
              <div>
                <p>Your account was created successfully!</p>
                <p>You can log in  <Link to="/login">here</Link></p>
              </div>) : (
              <p>Sorry, there has been an error</p>
            )}
          </Popup>
        }

      </div>
    );
     
  }
}

const mapStateToProps = state => {
  return {
    registerSuccess: state.register.success,
    registerError: state.register.error
  }
}
export default connect(mapStateToProps, {registerUser, resetRegisterPage})(Register);
