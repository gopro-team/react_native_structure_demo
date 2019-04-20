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
      route: '/stack',
    },
    Profile: {
      screen: React.Fragment,
      route: '/profile',
    },
    Favorite: {
      screen: React.Fragment,
      route: '/favorite',
    },
  };
  const navigatorConfig = {
    initialRouteName: 'HomeStack',
  };
  const drawer = createDrawerNavigator(routeConfigs, navigatorConfig);
  console.log(drawer);
  return drawer;
};

const createHomeStack = () => {
  const routeConfigs = {
    Home: {
      screen: Home,
      route: '/stack/home',
    },
    Filter: {
      screen: React.Fragment,
      route: '/stack/filter',
    },
    Detail: {
      screen: React.Fragment,
      route: '/stack/detail',
    },
    Camera: {
      screen: React.Fragment,
      route: '/stack/camera',
    },
  };
  const navigatorConfig = {
    initialRouteName: 'Home',
  };
  const mainStack = createStackNavigator(routeConfigs, navigatorConfig);
  console.log(mainStack);
  return mainStack;
};

export default createAppContainer(createDrawer());
