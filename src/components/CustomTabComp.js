// @ts-nocheck
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../assets/colors/colors';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReportIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MyTabBar({
  state,
  descriptors,
  navigation,
  setreset1,
  reset1,
  setreset2,
  reset2,
}) {
  function renderIcon(route, isFocues) {
    switch (route) {
      case 'Home':
        return (
          <Octicons
            name="home"
            size={responsiveFontSize(2.75)}
            color={isFocues ? 'black' : colors.themeblue}
          />
        );
      case 'Logs':
        return (
          <MaterialCommunityIcons
            name="clock-check-outline"
            size={responsiveFontSize(2.75)}
            color={isFocues ? 'black' : colors.themeblue}
          />
        );
      case 'Shop':
        return (
          <Entypo
            name="shop"
            size={responsiveFontSize(2.75)}
            color={isFocues ? 'black' : colors.themeblue}
          />
        );
      case 'Account':
        return (
          <MaterialIcons
            name="account-circle"
            size={responsiveFontSize(2.75)}
            color={isFocues ? 'black' : colors.themeblue}
          />
        );
      default:
        break;
    }
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        height: responsiveScreenFontSize(8),
        backgroundColor: 'white',
        bottom: 0,
        elevation: 0, // <-- this is the solution
      }}>
      {state.routes.map((route, index) => {
        if (route.name == 'BioShop') {
          return null;
        } else {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              if (route.name == 'Menu') {
                navigation.navigate(route.name);
              } else if (route.name == 'Home') {
                // setreset1(!reset1)
                navigation.navigate(route.name);
              }
              //   else if (route.name == "Trending") {
              //     setreset2(!reset2)
              //     navigation.navigate(route.name)
              //   }
              //   else if (route.name=="Cart"){
              //       navigation.navigate(route.name)
              //   }
              //   else if (route.name == "Live") {
              //       navigation.navigate(route.name)
              //   }
              else {
                navigation.navigate(route.name);
              }
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',

                padding: responsiveFontSize(0.5),
              }}>
              {renderIcon(label, isFocused)}
              <Text
                style={{
                  color: isFocused ? 'black' : colors.themeblue,
                  fontSize: responsiveFontSize(1.66),
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
}
