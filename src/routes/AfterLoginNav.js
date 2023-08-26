import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Tabs from './Tabs';

const MyTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
  },
};

const AfterLoginNav = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tabs />
    </NavigationContainer>
  );
};

export default AfterLoginNav;

const styles = StyleSheet.create({});
