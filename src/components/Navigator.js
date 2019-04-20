import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import Home from 'components/Home';

const createDrawer = () => {
  const routeConfigs = {
    HomeStack: {
      screen: createHomeStack(),
      route: '/',
    }
  };
  const navigatorConfig = {
    initialRouteName: 'HomeStack',
  };
  const drawer = createDrawerNavigator(routeConfigs, navigatorConfig);
  return drawer;
};

const createHomeStack = () => {
  const routeConfigs = {
    Home: {
      screen: Home,
      route: '/home',
    }
  };
  const navigatorConfig = {
    initialRouteName: 'Home',
  };
  const mainStack = createStackNavigator(routeConfigs, navigatorConfig);
  return mainStack;
};

export default createAppContainer(createDrawer());
