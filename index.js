import React from 'react';
import { AppRegistry } from 'react-native';
import App from 'components/App';
import { StyleProvider } from 'native-base';
import { Provider as ReduxProvider } from 'react-redux';
import { initStore } from 'store';

import { name as appName } from './app.json';
import getTheme from './native-base-theme/components';


const RootApp = () => (
  <StyleProvider style={getTheme()}>
    <ReduxProvider store={initStore()}>
      <App />
    </ReduxProvider>
  </StyleProvider>
);

AppRegistry.registerComponent(appName, () => RootApp);
