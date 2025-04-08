import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';

import {Provider} from 'react-redux';
import store from './src/redux/store';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigator/AppNavigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
