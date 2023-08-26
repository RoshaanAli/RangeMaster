// @ts-nocheck
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ErrorIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/colors/colors';
const InputField = ({
  maxL,
  placeHolder,
  icon,
  getValue,
  password,
  keyboardType,
  color,
  error,
  innerRef,
  returnKeyType,
  value,
  columns,
  onSubmitEditing,
  smallCaps = false,
  inputType = 'default',
  rightIcon = () => {
    return;
  },
  onPressRghtIcon = () => {
    return;
  },
  passedStyle,
  editable = true,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        alignItems: columns ? 'flex-start' : 'center',
      }}>
      {icon ? (
        <View
          style={{
            position: 'absolute',
            left: responsiveFontSize(2),
            marginHorizontal: responsiveWidth(0),
            marginTop: columns ? responsiveFontSize(1) : 0,
            zIndex: 999,
          }}>
          {icon()}
        </View>
      ) : null}
      {inputType !== 'password' ? (
        <>
          <TextInput
            maxLength={maxL}
            value={value}
            onSubmitEditing={() => (onSubmitEditing ? onSubmitEditing() : null)}
            ref={innerRef ? innerRef : null}
            returnKeyType={returnKeyType ? returnKeyType : 'default'}
            keyboardType={keyboardType === 'number' ? 'number-pad' : 'default'}
            secureTextEntry={password ? true : false}
            autoCapitalize={smallCaps ? 'none' : null}
            onChangeText={v => getValue(v)}
            multiline={columns ? true : false}
            numberOfLines={columns ? columns : null}
            textAlignVertical={columns ? 'top' : null}
            placeholder={placeHolder}
            placeholderTextColor={color}
            style={[
              {...styles.input, color: color, borderColor: color},
              passedStyle,
              {paddingLeft: icon ? responsiveWidth(10) : responsiveWidth(3)},
            ]}
            editable={editable}
          />
          {error ? (
            <View
              style={{
                position: 'absolute',
                right: 5,
                marginHorizontal: responsiveWidth(1),
              }}>
              <ErrorIcon
                name="error"
                color={colors.errorRed}
                size={responsiveFontSize(2)}
              />
            </View>
          ) : null}
        </>
      ) : (
        <>
          <TextInput
            value={value}
            returnKeyType={returnKeyType ? returnKeyType : 'default'}
            onSubmitEditing={() => (onSubmitEditing ? onSubmitEditing() : null)}
            ref={innerRef ? innerRef : null}
            keyboardType={keyboardType === 'number' ? 'number-pad' : 'default'}
            secureTextEntry={password ? true : false}
            autoCapitalize={smallCaps ? 'none' : null}
            onChangeText={v => getValue(v)}
            placeholder={placeHolder}
            placeholderTextColor={color}
            style={{
              ...styles.input,
              color: color,
              borderColor: color,
              paddingLeft: icon ? responsiveWidth(10) : responsiveWidth(3),
            }}
          />
          {error ? (
            <View
              style={{
                position: 'absolute',
                right: 10,
                marginHorizontal: responsiveWidth(1),
              }}>
              <ErrorIcon
                name="error"
                color={colors.errorRed}
                size={responsiveFontSize(2)}
              />
            </View>
          ) : null}
          {value !== null && value.length > 0 && (
            <TouchableOpacity
              onPress={onPressRghtIcon}
              style={{
                position: 'absolute',
                right: 10,
                marginHorizontal: responsiveWidth(1),
              }}>
              {rightIcon()}
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: responsiveFontSize(0.75),
    borderWidth: 1,
    borderColor: colors.silver,
    backgroundColor: 'white',
    borderRadius: responsiveScreenFontSize(1),
  },
  input: {
    flex: 1,
    color: colors.themeblue,
    paddingVertical: responsiveHeight(Platform.OS == 'ios' ? 1.75 : 1.5),
    paddingRight: responsiveWidth(9),
    fontSize: responsiveFontSize(1.7),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: responsiveScreenFontSize(1),
  },
});

export default InputField;
