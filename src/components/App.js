import React, { Component } from 'react';
import Navigator from 'components/Navigator';


export default class App extends Component {
  render() {
    console.warn('App:render');
    return (
      <Navigator />
    );
  }
}
