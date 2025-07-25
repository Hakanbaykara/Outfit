import 'react-native-gesture-handler';
import 'react-native-reanimated';
import '@/language';
import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import AppNavigator from './src/navigator/AppNavigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#f8fafc"
            translucent={true}
          />
          <AppNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
