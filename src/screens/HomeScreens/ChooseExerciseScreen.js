import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import colors from '../../assets/colors/colors';
import NotFound from '../../components/NotFound';

const ChooseExerciseScreen = ({navigation}) => {
  const ExcerciseCard = () => {
    return (
      <TouchableOpacity
        style={styles.itemStyle}
        onPress={() =>
          navigation.navigate('showExerciseVideo', {
            itemId: 1,
            heading: 'Scaption',
            videoLink: 'https://youtu.be/qUYpuu2zsdo',
            description:"Physical Therapist Guided - Shoulder Pulleys - Shoulder Flexion 1"
          })
        }>
        <Text style={{fontSize: responsiveFontSize(1.7), color: 'black'}}>
          Scaption
        </Text>
        <MaterialIcons
          name={'navigate-next'}
          color={'black'}
          size={responsiveFontSize(3)}
        />
      </TouchableOpacity>
    );
  };

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
      <Text style={styles.heading}>{`Choose\nExercise`}</Text>
      {/* <ExcerciseCards /> */}
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({item}) => <ExcerciseCard />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, i) => i.toString()}
        ListEmptyComponent={() => <NotFound text={'No data found'} />}
        contentContainerStyle={{marginTop: responsiveHeight(4)}}
      />
    </View>
  );
};

export default ChooseExerciseScreen;

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
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(2),
    borderWidth: 1,
    paddingHorizontal: '3%',
    borderRadius: responsiveFontSize(0.5),
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: responsiveHeight(1.5),
    borderWidth: 1,
    borderColor: 'lightgray',
    alignItems:"center"
  },
});
