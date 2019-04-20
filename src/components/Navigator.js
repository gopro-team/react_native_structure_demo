import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import Home from 'components/Home';

const createDrawer = () => {
  const routeConfigs = {
    Home: {
      screen: Home,
      route: '/',
    }
  };
  const navigatorConfig = {
    initialRouteName: 'Home',
  };
  const drawer = createDrawerNavigator(routeConfigs, navigatorConfig);
  return drawer;
};

const createMainStack = () => {
  const routeConfigs = {
    HomeDrawer: {
      screen: createDrawer(),
      route: '/',
    }
  };
  const navigatorConfig = {
    initialRouteName: 'HomeDrawer',
  };
  const mainStack = createStackNavigator(routeConfigs, navigatorConfig);
  return mainStack;
}

export default createAppContainer(createMainStack());