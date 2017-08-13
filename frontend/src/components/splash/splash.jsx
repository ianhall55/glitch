import React, {Component} from 'react';
import { connect } from 'redux'
import {hashHistory} from 'react-router';
import { withRouter } from 'react-router';
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

  render(){
    return(
      <div className="splash-page">
        <div className="splash-main">
          Glitch
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SplashPage));
