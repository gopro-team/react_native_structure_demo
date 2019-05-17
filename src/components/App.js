import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Navigator, { setTopLevelNavigator } from 'components/Navigator';
import 'styles/animation';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar hidden />
        <Navigator
          ref={navigatorRef => (setTopLevelNavigator(navigatorRef))}
        />
      </React.Fragment>
    );
  }
}
