import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';

const Btn = ({text, call, loader, passedStyle, passedTextStyle, disabled}) => {
  return (
    <LinearGradient
      colors={['#0D99FF', '#2F9DDF', '#5BBFFA']}
      start={{x: 0, y: 0}}
      end={{x: 0.8, y: 0}}
      style={[
        {
          ...styles.button,
        },
        passedStyle,
      ]}>
      <TouchableOpacity
        disabled={loader || disabled ? true : disabled}
        onPress={call}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {loader ? (
          <ActivityIndicator
            size={responsiveFontSize(3)}
            color={colors.loaderWhite}
          />
        ) : (
          <Text
            style={[
              {
                color: 'white',
                fontWeight: '500',
                fontSize: responsiveFontSize(1.8),
              },
              passedTextStyle,
            ]}>
            {text}
          </Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: responsiveFontSize(5),
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Btn;
