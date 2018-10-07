import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux'
import { registerUser } from '../../actions/actions'



class Register extends Component {
 
  static propTypes = {
    registerUser : PropTypes.func
  }

  state = {
  }

  handleRegisterButton = (ev) => {
    console.log('Start register ')
    ev.preventDefault();
    this.props.registerUser(this.state)
  }

  handleInputChange = (ev) => {
    const newState = {}
    newState[ev.target.name] = ev.target.value;
    this.setState(newState)
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

         
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {registerUser})(Register);
