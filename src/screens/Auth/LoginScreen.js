import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {connect} from 'react-redux';
import colors from '../../assets/colors/colors';
import InputField from '../../components/InputField';
import EyeIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Btn from '../../components/Btn';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as authAct from '../../store/actions/authAct';

const LoginScreen = ({navigation, login}) => {
  const password = useRef();
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });
  const [submit, setSubmit] = useState(false);
  const [isShowPass, setisShowPass] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  function getValue(k, v) {
    setFields(pS => {
      return {
        ...pS,
        [k]: v,
      };
    });
  }

  const onLogin = () => {
    console.log(fields);
    if (fields.email !== '' && fields.password !== '') {
      login(fields.email);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAwareScrollView>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../../assets/images/logo.png')}
          />
          <Text style={styles.heading}>Welcome Back</Text>
          <View style={styles.inputCont}>
            <InputField
              error={!fields.email && submit}
              returnKeyType="next"
              onSubmitEditing={() => {
                password.current.focus();
              }}
              getValue={v => getValue('email', v)}
              password={false}
              value={fields.email}
              placeHolder="Email"
              smallCaps={true}
              color={'black'}
            />
            <InputField
              inputType="password"
              innerRef={password}
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
          </View>
          <View style={styles.forgetPassCont}>
            <TouchableOpacity
              style={styles.rememberBtn}
              onPress={() => setIsRememberMe(prev => !prev)}>
              <MaterialIcons
                name={isRememberMe ? 'check-box' : 'check-box-outline-blank'}
                color={colors.silver}
                size={responsiveFontSize(2.2)}
              />
              <Text style={{fontSize: responsiveFontSize(1.7)}}>
                Remember Me
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forgetBtn}
              onPress={() => alert('In progress')}>
              <Text style={styles.lostPassText}>Lost your password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnCont}>
            <Btn
              text="Login"
              call={() => {
                // alert('sss');
                onLogin();
                setSubmit(true);
              }}
              loader={loading}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text>
              Don't have an account?{' '}
              <Text style={{color: colors.themeblue}}>Create</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default connect(null, authAct)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    paddingTop: responsiveHeight(15),
  },
  logo: {
    width: responsiveWidth(60),
    height: responsiveHeight(8),
  },
  heading: {
    fontSize: responsiveFontSize(4),
    fontWeight: '800',
    marginTop: responsiveHeight(4),
    color: colors.themeblue,
  },
  inputCont: {
    marginTop: responsiveHeight(5),
    width: '100%',
  },
  forgetPassCont: {
    width: '100%',
    marginVertical: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgetBtn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  lostPassText: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '500',
    color: colors.themeblue,
  },
  rememberBtn: {
    width: '34%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnCont: {
    width: '100%',
    marginTop: responsiveHeight(2),
    height: responsiveHeight(12),
    justifyContent: 'space-between',
  },
});
