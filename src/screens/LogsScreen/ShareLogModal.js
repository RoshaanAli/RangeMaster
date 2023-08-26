import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import InputField from '../../components/InputField';
import TextArea from '../../components/TextArea';
import Btn from '../../components/Btn';

const ShareLogModal = ({visible, closeModal}) => {
  const [fields, setFields] = useState({
    email: '',
    notes: '',
  });
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  function getValue(k, v) {
    setFields(pS => {
      return {
        ...pS,
        [k]: v,
      };
    });
  }
  
  onSendLog = () => {
    setSubmit(true);
    console.log(fields.notes.length)
    if (fields.email !== '' && fields.notes !== '') {
      console.log(fields);
    }
  };

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
            height: responsiveHeight(40),
          }}>
          <Text style={styles.heading}>Share Log</Text>
          <View
            style={{
              flex: 1,
              width: '100%',
              paddingHorizontal: '5%',
              marginTop: responsiveHeight(2),
            }}>
            <InputField
              error={!fields.email && submit}
              returnKeyType="done"
              getValue={v => getValue('email', v)}
              password={false}
              value={fields.email}
              placeHolder="Email"
              smallCaps={true}
              color={'black'}
            />
            <TextArea
              getValue={v => getValue('notes', v)}
              value={fields.notes}
              placeholder="Notes"
              style={{maxHeight: responsiveHeight(15),}}
            />
            <Btn
              passedStyle={{
                marginTop: responsiveHeight(2),
                width: '50%',
                alignSelf: 'center',
              }}
              text="Send Log"
              call={() => {
                onSendLog();
              }}
              loader={loading}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ShareLogModal;

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
