import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

// import components here
import Splash from './splash/splash'
import LoginForm from './login_form/login_form.jsx';
import SignupForm from './signup_form/signup_form.jsx';
import Home from './home';
import StreamRoom from './stream_room';

class AppRouter extends React.Component{
  constructor(props){
    super(props);

    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace) {
    const currentUser = window.store.getState().session.currentUser;
    if(!currentUser) {
      replace('/login');
    }
  }

  render() {
  	return (
  		<Router history={ hashHistory }>
        <Route exact path="/" component={ Splash } />
        <Route path="/login" component={ LoginForm }  />
        <Route path="/signup" component={ SignupForm }  />
        <Route path="/home" component={ Home } />
        <Route path="/rooms/:roomId" component={ StreamRoom } />
  		</Router>
  	);
  }
}

export default AppRouter;
