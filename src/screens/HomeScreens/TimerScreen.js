import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors/colors';
import RepCountModal from './RepCountModal';

const TimerScreen = ({navigation, initialMinutes = 5}) => {
  const initialTotalSeconds = initialMinutes * 60;
  const [timeLeft, setTimeLeft] = useState(initialTotalSeconds); // in seconds
  const [isPaused, setIsPaused] = useState(true);
  const [isShowRepCountModal, setIsShowRepCountModal] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    // setTimeout(() => setIsShowRepCountModal(true), 3000);
    if (isPaused || timeLeft <= 0) {
      clearInterval(intervalId.current);
      return;
    }

    intervalId.current = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 10);

    console.log(hours == 0,hours, minutes == 0,minutes, seconds == 1,seconds)
    if (hours == 0 && minutes == 0 && seconds == 1) {
      setTimeout(() => setIsShowRepCountModal(true), 3000);
    }
    return () => {
      clearInterval(intervalId.current);
    };
  }, [isPaused, timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft - hours * 3600) / 60);
  const seconds = timeLeft % 60;

  onStart = () => {
    console.log('start');
    setIsPaused(false);
  };
  onPause = () => {
    console.log('Pause');
    setIsPaused(true);
  };
  onStop = () => {
    console.log('stop');
    setIsPaused(true);
    setTimeLeft(initialTotalSeconds);
  };

  return (
    <View style={styles.container}>
      {isShowRepCountModal && (
        <RepCountModal visible={isShowRepCountModal} closeModal={setIsShowRepCountModal} />
      )}
      <LinearGradient
        colors={['#0D99FF', '#2F9DDF', '#5BBFFA']}
        start={{x: 0, y: 0}}
        end={{x: 0.8, y: 0}}
        style={[
          {
            ...styles.timerViewCont,
          },
        ]}>
        <Text style={styles.timerText}>
          {hours < 10 ? '0' + hours : hours} :{' '}
        </Text>
        <Text style={styles.timerText}>
          {minutes < 10 ? '0' + minutes : minutes} :{' '}
        </Text>
        <Text style={styles.timerText}>
          {' '}
          {seconds < 10 ? '0' + seconds : seconds}
        </Text>
      </LinearGradient>
      <View style={styles.btnCont}>
        <TouchableOpacity
          disabled={!isPaused}
          onPress={onStart}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.btnEnabled}>
            <FontAwesome5
              name="play"
              color={!isPaused ? 'gray' : 'black'}
              size={responsiveFontSize(4)}
            />
          </View>
          <Text
            style={{
              fontSize: responsiveFontSize(1.7),
              color: 'black',
            }}>
            Start
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isPaused}
          onPress={onPause}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{...styles.btnEnabled}}>
            <FontAwesome5
              name="pause"
              color={isPaused ? 'gray' : 'black'}
              size={responsiveFontSize(4)}
            />
          </View>
          <Text
            style={{
              fontSize: responsiveFontSize(1.7),
              color: 'black',
            }}>
            Pause
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onStop}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.btnEnabled}>
            <FontAwesome5
              name="stop"
              color="black"
              size={responsiveFontSize(4)}
            />
          </View>
          <Text
            style={{
              fontSize: responsiveFontSize(1.7),
              color: 'black',
            }}>
            Stop
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  timerViewCont: {
    width: '100%',
    borderRadius: responsiveFontSize(3),
    paddingVertical: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(5),
    flexDirection: 'row',
  },
  timerText: {
    color: 'white',
    fontWeight: '800',
    fontSize: responsiveFontSize(5),
  },
  btnCont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: responsiveHeight(5),
  },
  btnEnabled: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: responsiveFontSize(2),
    paddingHorizontal: '15%',
    paddingVertical: responsiveHeight(2),
    justifyContent: 'center',
  },
  btnDisabled: {},
});
