import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  NavigationActions,
} from 'react-navigation';
import Home from 'components/Home';
import PhotoDetail from 'components/Home/PhotoDetail';
import Profile from 'components/Profile';

const createDrawer = (HomeStack) => {
  const routeConfigs = {
    HomeStack: {
      screen: HomeStack,
    },
    Profile: {
      screen: Profile,
    },
    Favorite: {
      screen: React.Fragment,
    },
  };
  const navigatorConfig = {
    initialRouteName: 'HomeStack',
  };
  const Drawer = createDrawerNavigator(routeConfigs, navigatorConfig);
  return Drawer;
};

const createHomeStack = () => {
  const routeConfigs = {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    PhotoDetail: {
      screen: PhotoDetail,
    },
    Camera: {
      screen: React.Fragment,
    },
  };
  const navigatorConfig = {
    initialRouteName: 'Home',
  };
  const MainStack = createStackNavigator(routeConfigs, navigatorConfig);
  return MainStack;
};

export const StackNavigator = createHomeStack();
export const DrawerNavigator = createDrawer(StackNavigator);

let navigator;

export const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

export default createAppContainer(DrawerNavigator);
