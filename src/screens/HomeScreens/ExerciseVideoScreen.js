import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../../assets/colors/colors';
import Video from 'react-native-video';
import Btn from '../../components/Btn';

const ExerciseVideoScreen = ({navigation, route}) => {
  const {itemId, heading, videoLink, description} = route.params;
  const [isVideoPause, setIsVideoPause] = useState(false);

  const player = useMemo(() => {
    return (
      <Video
        source={require('../../assets/video2.mp4')}
        style={styles.video}
        onBuffer={() => console.log('wokring')}
        controls={false}
        resizeMode={'contain'}
        paused={isVideoPause}
        selectedVideoTrack={{type: 'resolution', value: 480}}
      />
    );
  }, [isVideoPause, navigation]);

  return (
    <ScrollView showsVerticalScrollIndicator contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Ionicons
          name={'arrow-back'}
          color={'black'}
          size={responsiveFontSize(5)}
        />
      </TouchableOpacity>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <TouchableOpacity
        style={{
          width: '100%',
          height: '50%',
          marginTop: responsiveHeight(3),
        }}
        onPress={() => setIsVideoPause(prev => !prev)}>
        {player}
      </TouchableOpacity>
      <Btn
        text={'Start your Exercise Now'}
        call={() => {navigation.navigate("showFeedback")}}
        passedStyle={{
          marginTop:responsiveHeight(5)
        }}
      />
    </ScrollView>
  );
};

export default ExerciseVideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  backBtn: {
    alignSelf: 'flex-start',
  },
  heading: {
    fontSize: responsiveFontSize(4),
    fontWeight: '800',
    color: colors.themeblue,
    lineHeight: responsiveFontSize(3.9),
    marginTop: responsiveHeight(3),
  },
  descriptionText: {
    fontSize: responsiveFontSize(1.7),
    color: 'black',
    marginTop: responsiveHeight(3),
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
