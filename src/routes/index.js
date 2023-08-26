import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {connect} from 'react-redux';
import BeforeLogInNav from './BeforeLogInNav';
import AfterLoginNav from './AfterLoginNav';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
  },
};

function Routes({authRed}) {
  const isloggedin = async () => {
    const res = await AsyncStorage.getItem('isUserLoggedIn');
    return JSON.parse(res);
  };
  return (
    <>
      {/* {isloggedin() ? ( */}
      {authRed?.isUserLoggedIn ? (
        <AfterLoginNav />
      ) : (
        <NavigationContainer theme={MyTheme}>
          <BeforeLogInNav />
        </NavigationContainer>
      )}
    </>
  );
}

function mapStateToProps({authRed}) {
  return {authRed};
}

export default connect(mapStateToProps, null)(Routes);
