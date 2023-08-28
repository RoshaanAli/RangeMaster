import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import colors from '../../assets/colors/colors';
import InputField from '../../components/InputField';
import Btn from '../../components/Btn';

const RemainderScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [selectedCalendarType, setSelectedCalendarType] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Ionicons
          name={'arrow-back'}
          color={'black'}
          size={responsiveFontSize(5)}
        />
      </TouchableOpacity>
      <Text style={styles.heading}>{`Add Remainder`}</Text>
      <InputField
        returnKeyType="done"
        getValue={v => setTitle(v)}
        password={false}
        value={title}
        placeHolder="Title"
        smallCaps={true}
        color={'black'}
        passedContainerStyle={{marginTop: responsiveHeight(5)}}
      />
      <View style={styles.btnCont}>
        {selectedCalendarType === 'daily' ? (
          <Btn
            text={'Daily'}
            call={() => setSelectedCalendarType('daily')}
            passedStyle={{
              width: '30%',
            }}
          />
        ) : (
          <TouchableOpacity
            onPress={() => setSelectedCalendarType('daily')}
            style={{
              ...styles.disableExercises,
              width: '30%',
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.8),
              }}>
              Daily
            </Text>
          </TouchableOpacity>
        )}
        {selectedCalendarType === 'weekly' ? (
          <Btn
            text={'Weekly'}
            call={() => setSelectedCalendarType('weekly')}
            passedStyle={{
              width: '30%',
              marginLeft: '10%',
            }}
          />
        ) : (
          <TouchableOpacity
            onPress={() => setSelectedCalendarType('weekly')}
            style={{
              ...styles.disableExercises,
              width: '30%',
              marginLeft: '10%',
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.8),
              }}>
              Weekly
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.head}>Selected Date</Text>
      <Btn
        text={'Save Remainder'}
        call={() => alert('In Progress')}
      />
    </View>
  );
};

export default RemainderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
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
  btnCont: {
    flexDirection: 'row',
    marginTop: responsiveHeight(3),
  },
  disableExercises: {
    marginRight: '2%',
    marginBottom: responsiveHeight(1),
    borderRadius: responsiveFontSize(5),
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
    fontWeight: '500',
  },
  head: {
    color: 'black',
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(2),
  },
});
