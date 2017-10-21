import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header/header';
import StreamRoomForm from './stream_room_form';
import StreamRoomList from './stream_room_list';

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
          <StreamRoomList />
          <StreamRoomForm />
        </div>
      </div>
    );
  }
}

export default connect()(Home);
