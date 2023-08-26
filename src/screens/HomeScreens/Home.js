import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import NotFound from '../../components/NotFound';

const ExerciseCards = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardItems}>
        <Text style={{fontSize: responsiveFontSize(1.7)}}>Exercise</Text>
        <Text
          style={{fontSize: responsiveFontSize(1.7), color: colors.themeblue}}>
          Scaption
        </Text>
      </View>
      <View style={styles.cardItems}>
        <Text style={{fontSize: responsiveFontSize(1.7)}}>Pain Level</Text>
        <Text
          style={{fontSize: responsiveFontSize(1.7), color: colors.themeblue}}>
          5
        </Text>
      </View>
      <View style={styles.cardItems}>
        <Text style={{fontSize: responsiveFontSize(1.7)}}>Feel Better</Text>
        <Text
          style={{fontSize: responsiveFontSize(1.7), color: colors.themeblue}}>
          Unsure
        </Text>
      </View>
    </View>
  );
};

const Home = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.headerLeft}>
          <MaterialCommunityIcons
            name="menu"
            size={responsiveFontSize(4)}
            color={'black'}
          />
        </TouchableOpacity>
      ),
      headerTitle: props => (
        <View style={styles.headerTitleCont}>
          <Image
            style={styles.headerLogo}
            resizeMode="contain"
            source={require('../../assets/images/logo.png')}
          />
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            width: responsiveWidth(13),
          }}>
          <TouchableOpacity>
            <Ionicons
              name="notifications-outline"
              size={responsiveFontSize(4)}
              color={colors.themeblue}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0D99FF', '#2F9DDF', '#5BBFFA']}
        start={{x: 0, y: 0}}
        end={{x: 0.8, y: 0}}
        style={{
          height: responsiveHeight(10),
          borderRadius: responsiveFontSize(2),
          width: '100%',
          marginTop: responsiveHeight(4),
        }}>
        <TouchableOpacity onPress={()=>navigation.navigate("showChooseExercise")} style={styles.excerciseBtn}>
          <FontAwesome5
            name="play"
            size={responsiveFontSize(2.75)}
            color={'white'}
          />
          <Text style={styles.btntext}>Start your Excercise</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.headingContainer}>
        <Text style={{...styles.btntext, color: 'black'}}>Excercise Logs</Text>
        <TouchableOpacity style={styles.seeAllBtn}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.7),
              marginRight: '10%',
              color: colors.themeblue,
            }}>
            See All
          </Text>
          <FontAwesome5
            name="chevron-right"
            size={responsiveFontSize(1.6)}
            color={colors.themeblue}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: responsiveHeight(4),
          height: responsiveHeight(50),
        }}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({item}) => <ExerciseCards item={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, i) => i.toString()}
          ListEmptyComponent={() => <NotFound text={'No data found'} />}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          position: 'absolute',
          bottom: responsiveHeight(4),
          right: '10%',
        }}>
        <TouchableOpacity style={styles.floatBtn}>
          <AntDesign name="plus" size={responsiveFontSize(4)} color={'white'} />
        </TouchableOpacity>
        <Text style={{fontSize: responsiveFontSize(1.7)}}>Remainder</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  btntext: {
    fontSize: responsiveFontSize(3),
    fontWeight: '800',
    color: 'white',
  },
  excerciseBtn: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
  headingContainer: {
    width: '100%',
    marginTop: responsiveHeight(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAllBtn: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(3),
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: responsiveHeight(1.5),
    borderRadius: responsiveFontSize(3),
    borderWidth: 1,
    borderColor: 'lightgray',
    // backgroundColor:"red"
  },
  cardItems: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatBtn: {
    backgroundColor: colors.themeblue,
    height: responsiveHeight(8),
    width: responsiveHeight(8),
    borderRadius: responsiveHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // bottom: responsiveHeight(4),
    // right: '15%',
  },
  headerTitleCont: {
    alignItems: 'center',
    width: responsiveWidth(65),
    alignSelf: 'center',
  },
  headerLogo: {
    height: responsiveFontSize(8),
    width: responsiveFontSize(15),
  },
  headerLeft: {
    width: responsiveWidth(13),
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
