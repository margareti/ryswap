import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, resetUser } from '../../actions/actions';
import '../block/block.scss';

class Login extends Component {
  state = {};

  componentDidMount() {
    this.props.resetUser();
  }

  componentWillReceiveProps(props) {
    if (props.loggedIn) {
      this.props.history.push('/home');
    }
  }

  handleLoginButton = ev => {
    ev.preventDefault();
    this.props.loginUser(this.state);
  };

  handleInputChange = ev => {
    const newState = {};
    newState[ev.target.name] = ev.target.value;
    this.setState(newState);
  };

  checkDisabledLogin = () => {
    return !(
      this.state.username &&
      this.state.password &&
      this.state.username.length > 3 &&
      this.state.password.length > 3
    );
  };

  render() {
    return (
      <div className="block">
        <form>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button disabled={this.checkDisabledLogin()} onClick={this.handleLoginButton} type="submit">
            Log In
          </button>
        </form>
        <p>
          Or <Link to="/register">register here</Link> if you don't have an account
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

export default connect(
  mapStateToProps,
  { loginUser, resetUser }
)(Login);
