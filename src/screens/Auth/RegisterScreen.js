import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import MailIcon from 'react-native-vector-icons/Fontisto';
import colors from '../../assets/colors/colors';
import InputField from '../../components/InputField';
import EyeIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PassIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Btn from '../../components/Btn';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = ({navigation}) => {
  const password = useRef();
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    code: '',
  });
  const [submit, setSubmit] = useState(false);
  const [isShowPass, setisShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  function getValue(k, v) {
    setFields(pS => {
      return {
        ...pS,
        [k]: v,
      };
    });
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAwareScrollView>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}>
            <Ionicons
              name={'arrow-back'}
              color={'black'}
              size={responsiveFontSize(5)}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Create a new account</Text>
          <View style={styles.inputCont}>
            <InputField
              error={!fields.name && submit}
              returnKeyType="next"
              getValue={v => getValue('name', v)}
              password={false}
              value={fields.name}
              placeHolder="Name"
              smallCaps={true}
              color={'black'}
            />
            <InputField
              error={!fields.email && submit}
              returnKeyType="next"
              getValue={v => getValue('email', v)}
              password={false}
              value={fields.email}
              placeHolder="Email"
              smallCaps={true}
              color={'black'}
            />
            <InputField
              inputType="password"
              error={!fields.password && submit}
              getValue={v => getValue('password', v)}
              password={!isShowPass}
              placeHolder="Password"
              smallCaps={true}
              color={'black'}
              value={fields.password}
              rightIcon={() => {
                if (isShowPass) {
                  return (
                    <EyeIcon
                      name="eye"
                      color={colors.themeblue}
                      size={responsiveFontSize(2.2)}
                    />
                  );
                } else {
                  return (
                    <EyeIcon
                      name="eye-with-line"
                      color={colors.themeblue}
                      size={responsiveFontSize(2.2)}
                    />
                  );
                }
              }}
              onPressRghtIcon={() => setisShowPass(prev => !prev)}
            />
            <InputField
              inputType="password"
              error={!fields.confirmPassword && submit}
              getValue={v => getValue('confirmPassword', v)}
              password={true}
              placeHolder="Confirm Password"
              smallCaps={true}
              color={'black'}
              value={fields.confirmPassword}
              rightIcon={() => {
                if (fields.password == fields.confirmPassword) {
                  return (
                    <Ionicons
                      name="checkmark-done-outline"
                      color={colors.themeblue}
                      size={responsiveFontSize(2.2)}
                    />
                  );
                }
              }}
            />
          </View>
          <View style={{width: '100%'}}>
            <Text style={[styles.text, {color: colors.themeblue}]}>
              Personal Access code
            </Text>
            <Text style={styles.text}>
              Located on product insert car(you can also enter "Guest" for
              access Today)
            </Text>
            <InputField
              error={!fields.code && submit}
              returnKeyType="done"
              getValue={v => getValue('code', v)}
              password={false}
              value={fields.codeode}
              placeHolder="Enter"
              smallCaps={true}
              color={'black'}
            />
            {/* <View style={styles.btnCont}> */}
            <Btn
              passedStyle={{marginTop:responsiveHeight(4)}}
              text="Register"
              call={() => {
                alert('Register');
                setSubmit(true)
              }}
              loader={loading}
            />
            {/* </View> */}
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    // paddingTop: responsiveHeight(5),
  },
  backBtn: {
    alignSelf: 'flex-start',
  },
  heading: {
    fontSize: responsiveFontSize(4),
    fontWeight: '800',
    marginTop: responsiveHeight(2),
    color: colors.themeblue,
  },
  inputCont: {
    marginTop: responsiveHeight(5),
    width: '100%',
  },
  text: {
    fontSize: responsiveFontSize(1.7),
    color: 'gray',
    lineHeight: responsiveFontSize(3),
  },
});
