import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import {connect} from 'react-redux';
import { signup } from '../../util/session_api_util';
import { clearErrors } from '../../actions/forms_actions';
import Header from '../header/header';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update(fieldName){
    return e => { this.setState({[fieldName]: e.currentTarget.value }); };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  renderErrors() {
    const errorLines = [];

    this.props.errors.forEach( (error, i) => (
      errorLines.push(
        <li className="error" key={i}>
          {error}
        </li>
      )
    ));

    return(errorLines);
  }

  render() {

    return(
      <div className="login-form-container">
        <Header noOptions={true} />
				<form onSubmit={this.handleSubmit} className="session-form-box">
					<div className="session-form">
            <ul className="session-errors">
              { this.renderErrors() }
            </ul>
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="signup-input"
                placeholder="Username" />

							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="signup-input"
                placeholder="Email" />

							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="signup-input"
                placeholder="Password" />

            <input className="login-submit" type="submit" value="SIGN UP" />


					</div>
				</form>
        <div className="session-footer-nav">
          <button className="oauth"><a href="/auth/facebook">Sign up with Facebook</a></button>
            <label className="form-footer">
              Already have an account? { <Link to="/login">Log in</Link> }
            </label>
        </div>
			</div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  errors: state.forms.signup.errors,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignupForm));
