import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Btn from '../../components/Btn';
import { useNavigation } from '@react-navigation/native';

const CongratsModal = ({visible, closeModal}) => {
    const navigation = useNavigation()
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
            height: responsiveHeight(32),
          }}>
          <Text style={styles.heading}>Congratulations</Text>
          <View
            style={{
              flex: 1,
              width: '100%',
              paddingHorizontal: '5%',
              marginTop: responsiveHeight(4),
            }}>
            <Text style={{fontSize:responsiveFontSize(1.7),color:"gray"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
            <Btn
              passedStyle={{
                marginTop: responsiveHeight(4),
                width: '50%',
                alignSelf: 'center',
              }}
              text="Go to Home"
              call={() => {navigation.navigate("showHome")}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CongratsModal;

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
