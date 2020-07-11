import React, { Component } from 'react';

import { Contacts, Header } from '../components';

class HomeScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Contacts />
      </>
    );
  }
}

export default HomeScreen;
