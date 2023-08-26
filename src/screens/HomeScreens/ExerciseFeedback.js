import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Btn from '../../components/Btn';
import CongratsModal from './CongratsModal';

const ExerciseFeedback = () => {
  const [feedBackData, setFeedBackData] = useState({
    excercise: '',
    painLevel: '',
    feelingBetter: '',
  });
  const [isShowCongratsModal, setIsShowCongratsModal] = useState(false);

  function getValue(k, v) {
    setFeedBackData(pS => {
      return {
        ...pS,
        [k]: v,
      };
    });
  }

  onSubmit = () => {
    if (
      feedBackData.excercise &&
      feedBackData.feelingBetter &&
      feedBackData.painLevel
    ) {
      console.log(feedBackData);
      setIsShowCongratsModal(true)
    }
  };

  const ExcerciseCard = ({name}) => {
    return name === feedBackData.excercise ? (
      <Btn
        text={name}
        call={() => {
          getValue('excercise', name);
        }}
        passedStyle={{
          width: responsiveWidth(name.length + 20),
          marginRight: '2%',
          marginBottom: responsiveHeight(1),
        }}
      />
    ) : (
      <TouchableOpacity
        onPress={() => {
          getValue('excercise', name);
        }}
        style={{
          ...styles.disableExercises,
          width: responsiveWidth(name.length + 20),
        }}>
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };

  const PainLevelCard = ({name}) => {
    return name === feedBackData.painLevel ? (
      <Btn
        text={name}
        call={() => {
          getValue('painLevel', name);
        }}
        passedStyle={{
          width: responsiveWidth(12),
          marginRight: '6%',
          marginBottom: responsiveHeight(1),
          borderRadius: responsiveFontSize(1),
        }}
      />
    ) : (
      <TouchableOpacity
        onPress={() => {
          getValue('painLevel', name);
        }}
        style={{
          ...styles.disableExercises,
          width: responsiveWidth(12),
          borderRadius: responsiveFontSize(1),
          marginRight: '6%',
        }}>
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };

  const FeelBetterCard = ({name}) => {
    return name === feedBackData.feelingBetter ? (
      <Btn
        text={name}
        call={() => {
          getValue('feelingBetter', name);
        }}
        passedStyle={{
          width: responsiveWidth(25),
          borderRadius: responsiveFontSize(5),
        }}
      />
    ) : (
      <TouchableOpacity
        onPress={() => {
          getValue('feelingBetter', name);
        }}
        style={{
          ...styles.disableExercises,
          width: responsiveWidth(25),
          borderRadius: responsiveFontSize(5),
        }}>
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {isShowCongratsModal && (
        <CongratsModal
          visible={isShowCongratsModal}
          closeModal={setIsShowCongratsModal}
        />
      )}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Ionicons
          name={'arrow-back'}
          color={'black'}
          size={responsiveFontSize(5)}
        />
      </TouchableOpacity>
      <Text style={styles.heading}>{`Excercise\nFeedback`}</Text>
      <Text
        style={{
          color: 'black',
          fontSize: responsiveFontSize(2.5),
          marginTop: responsiveHeight(2),
        }}>
        What exercise did you do?
      </Text>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          marginTop: responsiveHeight(2),
        }}>
        {[
          {name: 'Scaption'},
          {name: 'Flexion'},
          {name: 'External Rotation'},
          {name: 'Internal Rotation'},
          {name: 'Not sure'},
        ].map((item, i) => {
          return <ExcerciseCard name={item.name} key={i} />;
        })}
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: responsiveFontSize(2.5),
          marginTop: responsiveHeight(2),
        }}>
        What was your pain level?
      </Text>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          marginTop: responsiveHeight(2),
          justifyContent: 'space-between',
        }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => {
          return <PainLevelCard name={item} key={i} />;
        })}
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: responsiveFontSize(2.5),
          marginTop: responsiveHeight(2),
        }}>
        Do you feel like you're getting better?
      </Text>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          marginTop: responsiveHeight(2),
          justifyContent: 'space-between',
        }}>
        {['Yes', 'No', 'Not sure'].map((item, i) => {
          return <FeelBetterCard name={item} key={i} />;
        })}
      </View>
      <Btn
        text={'Submit'}
        call={() => {
          onSubmit();
        }}
        passedStyle={{
          marginTop: responsiveHeight(4),
        }}
      />
    </ScrollView>
  );
};

export default ExerciseFeedback;

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
});
