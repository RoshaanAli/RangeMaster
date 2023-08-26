import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';

const BeforeLogInNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{animation: 'none'}}>
      <Stack.Screen name="login" options={{headerShown: false}}>
        {props => <LoginScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="register" options={{headerShown: false}}>
        {props => <RegisterScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default BeforeLogInNav;
