import {StyleSheet, TextInput, Dimensions} from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const {width} = Dimensions.get('window');

const TextArea = ({
  getValue,
  value,
  numberOfLines,
  placeholder,
  style,
  returnKeyType,
  onSubmitEditing,
  innerRef,
}) => {
  return (
    <>
      <TextInput
        multiline
        numberOfLines={numberOfLines || 4}
        onChangeText={v => getValue(v)}
        value={value}
        onSubmitEditing={() => {
          onSubmitEditing ? onSubmitEditing() : null;
        }}
        // returnKeyType={returnKeyType ? returnKeyType : 'default'}
        ref={innerRef ? innerRef : null}
        placeholder={placeholder || 'Enter ...'}
        placeholderTextColor={"black"}
        style={[styles.txtarea, style]}
      />
    </>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  txtarea: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: colors.silver,
    borderRadius: responsiveFontSize(1),
    backgroundColor: "rgba(0,0,0,0.05)",
    textAlignVertical: 'top',
    paddingLeft: width * 0.03,
    fontSize: responsiveFontSize(1.7),
    color: 'black',
    minHeight: responsiveHeight(10),
  }
});
