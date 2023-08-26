import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default function NotFound({text}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: responsiveFontSize(2),
        marginHorizontal: responsiveFontSize(2),
        zIndex: -1,
      }}>
      <Text
        style={{
          fontSize: responsiveFontSize(2),
          textAlign: 'center',
        }}>
        {text ? text : 'Not Found'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
