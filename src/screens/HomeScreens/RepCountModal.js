import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Btn from '../../components/Btn';
import {useNavigation} from '@react-navigation/native';
import InputField from '../../components/InputField';

const RepCountModal = ({visible, closeModal}) => {
    const [repCounts, setRepCounts] = useState("")
  return (
    <Modal isVisible={visible} onBackdropPress={() => closeModal(false)}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            ...styles.con,
            backgroundColor: 'white',
            height: responsiveHeight(35),
          }}>
          <Text style={styles.heading}>Rep's Count</Text>
          <View
            style={{
              flex: 1,
              width: '100%',
              paddingHorizontal: '5%',
              marginTop: responsiveHeight(4),
            }}>
            <Text style={{fontSize: responsiveFontSize(1.7), color: 'gray'}}>
              Enter reps data manually to create log
            </Text>
            <InputField
            //   error={!repCounts && submit}
              returnKeyType="done"
              getValue={v => setRepCounts(v)}
              password={false}
              value={repCounts}
              placeHolder="Enter counts"
              smallCaps={true}
              color={'black'}
              passedStyle={{width:"80%"}}
            />
            <Btn
              passedStyle={{
                marginTop: responsiveHeight(4),
                width: '50%',
                alignSelf: 'center',
              }}
              text="Save"
              call={() => {
                closeModal(false);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RepCountModal;

const styles = StyleSheet.create({
  con: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(80),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: responsiveFontSize(3),
  },
  heading: {
    fontSize: responsiveFontSize(3),
    fontWeight: '800',
    color: 'black',
    marginTop: responsiveHeight(4),
  },
});
