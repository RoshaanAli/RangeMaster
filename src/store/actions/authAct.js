import RangerMaster from '../../config/RangerMaster';
import config from '../../config/config';
import {LOG_IN} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = (password, email) => async dispatch => {
  try {
    // const res = await RangerMaster.post('/v1/auth/user/signin', {
    //   email,
    //   password,
    //  });
    await AsyncStorage.setItem('isUserLoggedIn', JSON.stringify(true));
    // RangerMaster.defaults.headers.common['Authorization'] =
    //   'Bearer ' + res.data.data.token;
    dispatch({
      type: LOG_IN,
      payload: email,
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: LOG_IN,
    //   payload: err?.response?.data,
    // });
  }
};

export const logout = () => async dispatch => {
  try {
    // await AsyncStorage.removeItem('isUserLoggedIn');
    console.log("logout")
    dispatch({
      type: "clearAuth",
      payload: {},
    });
  } catch (err) {
    console.log(err);
  }
};