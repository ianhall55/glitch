import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter, Link, hashHistory } from 'react-router';
import Header from '../header/header';


class SplashPage extends Component {
  constructor(props){
    super(props);

    this.state = {};

    this.loginRedirect = this.loginRedirect.bind(this);
  }

  loginRedirect(e){
    e.preventDefault();
    hashHistory.push('/login');
  }

  signupRedirect(e){
    e.preventDefault();
    hashHistory.push('/signup');
  }

  renderUser() {
    if (this.props.currentUser) {
      return(<div><h3>Hi {this.props.currentUser.username}!</h3></div>)
    }
  }

  render(){
    var links;
    if (!this.props.currentUser) {
      links = (
        <div style={{display:'flex',flexDirection:'column'}}>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </div>
      );
    } else {
      links = <Link to='/home'>Home</Link>;
    }

    return(
      <div className="splash-page">
        <Header/>
        <div className="splash-main" style={styles}>
          Glitch Splash
          <div className='links'>
            { links }
          </div>
        </div>
        { this.renderUser() }
      </div>
    );
  }
}

const styles = {
  display: 'flex',
  flexDirection: 'column'
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SplashPage));
