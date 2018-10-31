import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser, resetUser } from '../../actions/actions';
import Navigation from '../navigation/Navigation';
import '../block/block.scss';
import FindFlight from '../findFlight/FindFlight';
import MyFlights from '../myFlights/MyFlights';

class Home extends Component {
  componentWillMount() {
    this.props.getCurrentUser();
  }

  componentWillReceiveProps(props) {
    if (!props.user && !props.loggedIn) {
      this.props.history.push('/login');
    }
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <div>
        <Navigation />
        <h3 className="block">{this.props.user && this.props.user.name}, Welcome to Ryswap Home!</h3>
        <FindFlight />
        <MyFlights />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loggedIn: state.auth.loggedIn
  };
};

export default connect(
  mapStateToProps,
  { getCurrentUser, resetUser }
)(Home);
