import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../../actions/actions'



class Login extends Component {

  state = {
     
  }

  handleLoginButton = (ev) => {
    ev.preventDefault();
    this.props.loginUser(this.state)
  }

  handleInputChange = (ev) => {
    const newState = {}
    newState[ev.target.name] = ev.target.value;
    this.setState(newState)
  }

  checkDisabledLogin = () => {
    return !(this.state.username && this.state.password 
      && this.state.username.length > 3 && this.state.password.length > 3)
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleInputChange} />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          <button type="button" disabled={this.checkDisabledLogin()} onClick={this.handleLoginButton}>Log In</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {loginUser})(Login);
