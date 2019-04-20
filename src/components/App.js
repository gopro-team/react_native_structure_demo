import React, { Component } from 'react';
import Navigator, { setTopLevelNavigator } from 'components/Navigator';


export default class App extends Component {
  render() {
    console.warn('App:render');
    return (
      <Navigator
        ref={navigatorRef => (setTopLevelNavigator(navigatorRef))}
      />
    );
  }
}
