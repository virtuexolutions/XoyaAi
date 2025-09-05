/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from './SRC/Screens/SplashScreen';
import { persistor, store } from './SRC/Store/index';
import {
  requestCameraPermission,
  requestLocationPermission,
  requestWritePermission,
} from './SRC/Utillity/utils';
import AppNavigator from './SRC/appNavigation';
import Signup from './SRC/Screens/Signup';
import HomeScreen from './SRC/Screens/HomeScreen';
import VoiceLIstening from './SRC/Screens/VoiceLIstening';
// import AppNavigator, {DrawerRoot} from './SRC/appNavigation';


const App = () => {
  const [publishableKey, setPublishableKey] = useState('');

  const fetchPublishableKey = async () => {
    const key = await fetchKey(); // fetch key from your server here
    setPublishableKey(key);
  };

  


  console.reportErrorsAsExceptions = false;
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <MainContainer />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

const MainContainer = () => {
  const dispatch = useDispatch();

 
  useEffect(() => {
    async function GetPermission() {
      await requestCameraPermission();
      await requestWritePermission();
      await requestLocationPermission();
    }
    GetPermission();
  }, []);

  const [isloading] = useloader(true);
  if (isloading == true) {
    return <SplashScreen />;
  }
  return <AppNavigator/>
  // return <VoiceLIstening />;
  // return <HomeScreen />;
  // return <Signup />;
};

const useloader = value => {
  const [isloading, setIsloading] = useState(value);
  const [loadingTime] = useState(2000);
  useEffect(() => {
    setTimeout(() => setIsloading(false), loadingTime);
  }, []);
  return [isloading];
};
export default App;
                                                          