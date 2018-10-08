import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCurrentUser, resetUser} from '../../actions/actions'

class Home extends Component {

  componentWillMount() {
    this.props.getCurrentUser();
  }

  componentWillReceiveProps(props) {
    if ( !props.user && !props.loggedIn) {
      this.props.history.push('/login')
    }
  }

  handleLogout = () => {
    this.props.resetUser()
  }

  render() {
    if (!this.props.user) {
      return null
    } 
    return (
      <div>
        <div style={{textAlign: 'right'}}><button onClick={this.handleLogout}>Logout</button></div>
        <h3>{this.props.user && this.props.user.name}, Welcome to Ryswap Home!</h3>
      </div>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, {getCurrentUser, resetUser})(Home);
