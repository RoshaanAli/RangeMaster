import { View, SafeAreaView, StatusBar} from 'react-native';
import React, { useEffect } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
// import {store,persistor} from './store'
import { store } from './store'
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  //   useEffect(() => {
  //     SplashScreen.hide()
  //     GlobalFont.applyGlobal("Helvetica LT")
  //     const unsubscribe = NetInfo.addEventListener(state => {
  //       setConnection(state.isConnected)
  //     });
  //     return () => {
  //       unsubscribe();
  //     }
  //   }, [])

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Routes />
        {/* </PersistGate> */}
        </Provider>
      </SafeAreaView>
    </View>
  );
}
