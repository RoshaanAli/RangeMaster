import Home from '../screens/HomeScreens/Home';
import {
  StyleSheet,
  View,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseExerciseScreen from '../screens/HomeScreens/ChooseExerciseScreen';
import ExerciseVideoScreen from '../screens/HomeScreens/ExerciseVideoScreen';
import ExerciseFeedback from '../screens/HomeScreens/ExerciseFeedback';
import TimerScreen from '../screens/HomeScreens/TimerScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../assets/colors/colors';
import RemainderScreen from '../screens/HomeScreens/RemainderScreen';

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
          <Stack.Screen options={{headerShown: true}} name="showHome">
            {props => <Home {...props} />}
          </Stack.Screen>
          <Stack.Screen
            options={{headerShown: false}}
            name="showChooseExercise">
            {props => <ChooseExerciseScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen options={{headerShown: false}} name="showExerciseVideo">
            {props => <ExerciseVideoScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen options={{headerShown: false}} name="showFeedback">
            {props => <ExerciseFeedback {...props} />}
          </Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: true,
              header: () => {
                return (
                  <View style={styles.headerCont}>
                    <TouchableOpacity style={styles.headerLeft}>
                      <MaterialCommunityIcons
                        name="menu"
                        size={responsiveFontSize(4)}
                        color={'black'}
                      />
                    </TouchableOpacity>
                    <View style={styles.headerTitleCont}>
                      <Image
                        style={styles.headerLogo}
                        resizeMode="contain"
                        source={require('../assets/images/logo.png')}
                      />
                    </View>
                    <View
                      style={{
                        width: responsiveWidth(13),
                      }}>
                      <TouchableOpacity>
                        <Ionicons
                          name="notifications-outline"
                          size={responsiveFontSize(4)}
                          color={colors.themeblue}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              },
            }}
            name="showTimer">
            {props => <TimerScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen options={{headerShown: false}} name="showRemainder">
            {props => <RemainderScreen {...props} />}
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

const styles = StyleSheet.create({
  headerCont:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  headerTitleCont: {
    alignItems: 'center',
    width: responsiveWidth(65),
    alignSelf: 'center',
  },
  headerLogo: {
    height: responsiveFontSize(8),
    width: responsiveFontSize(15),
  },
  headerLeft: {
    width: responsiveWidth(13),
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
