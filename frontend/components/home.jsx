import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header/header';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="home">
        <Header/>
        <div className="home-cotent">
          Home Page
        </div>
      </div>
    );
  }
}

export default connect()(Home);
