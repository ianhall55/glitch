import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../util';

class Header extends Component  {
  constructor(props) {
    super(props);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  renderLogout() {
    if (!!this.props.currentUser) {
      return(
        <input
          className='logout'
          type='submit'
          value='Log Out'
          onClick={ this.handleLogout.bind(this) }
        />
      );
    }
  }

  render() {
    return(
      <div>
        <h1>Glitch Header</h1>
        { this.renderLogout() }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
