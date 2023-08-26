import Home from '../screens/HomeScreens/Home';
import {StyleSheet, View, Platform, Dimensions} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseExerciseScreen from '../screens/HomeScreens/ChooseExerciseScreen';
import ExerciseVideoScreen from '../screens/HomeScreens/ExerciseVideoScreen';
import ExerciseFeedback from '../screens/HomeScreens/ExerciseFeedback';

const {width} = Dimensions.get('window');
const head = {};

if (width > 550) head.height = 80;

const Stack = createNativeStackNavigator();

function HomeRoutes({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const renderRoutes = () => {
    return (
      <>
        <Stack.Navigator
          initialRouteName="showHome"
          screenOptions={{animation: 'none'}}>
          <Stack.Screen options={{headerShown: false}} name="showHome">
            {props => <Home {...props} />}
          </Stack.Screen>
          <Stack.Screen options={{headerShown: false}} name="showChooseExercise">
            {props => <ChooseExerciseScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen options={{headerShown: false}} name="showExerciseVideo">
            {props => <ExerciseVideoScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen options={{headerShown: false}} name="showFeedback">
            {props => <ExerciseFeedback {...props} />}
          </Stack.Screen>
          {/* <Stack.Screen name="notification" options={{headerShown: false}}>
            {props => <Notification {...props} />}
          </Stack.Screen> */}
        </Stack.Navigator>
      </>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>{renderRoutes()}</View>
  );
}
export default HomeRoutes;

const styles = StyleSheet.create({});
