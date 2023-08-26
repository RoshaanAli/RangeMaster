import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as authAct from '../../store/actions/authAct';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../../assets/colors/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import ShareLogModal from './ShareLogModal'

const CardItem = ({setIsShowShareLogModal}) => {
  return (
    <TouchableOpacity
      onPress={() => setIsShowShareLogModal(true)}
      style={styles.cardCont}>
      <View style={styles.cardItemStyle}>
        <View>
          <Text style={{color: 'gray', fontSize: responsiveFontSize(1.7)}}>
            Exercise
          </Text>
          <Text
            style={{
              color: colors.themeblue,
              fontSize: responsiveFontSize(1.9),
            }}>
            Scaption
          </Text>
        </View>
        <View>
          <Text style={{color: 'gray', fontSize: responsiveFontSize(1.7)}}>
            Pain Level
          </Text>
          <Text
            style={{
              color: colors.themeblue,
              fontSize: responsiveFontSize(1.9),
            }}>
            5
          </Text>
        </View>
        <View>
          <Text style={{color: 'gray', fontSize: responsiveFontSize(1.7)}}>
            Feel Better
          </Text>
          <Text
            style={{
              color: colors.themeblue,
              fontSize: responsiveFontSize(1.9),
            }}>
            Unsure
          </Text>
        </View>
      </View>
      <View style={styles.shareLogCont}>
        <FontAwesome
          name="share-square-o"
          size={responsiveFontSize(2)}
          color={colors.themeblue}
        />
        <Text
          style={{
            fontSize: responsiveFontSize(1.7),
            color: 'gray',
            marginLeft: '3%',
          }}>
          Share Log
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// const ShareLogModal = ({visible, closeModal}) => {
//   return (
//     <Modal isVisible={visible} onBackdropPress={()=>closeModal(false)}>
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//           // backgroundColor: 'rgba(0,0,0,0.7)',
//         }}>
//         <View
//           style={{
//             ...styles.con,
//             backgroundColor: 'white',
//             height: responsiveHeight(45),
//           }}>
//           {/* <View
//             style={{
//               width: '95%',
//               alignItems: 'flex-end',
//               marginTop: responsiveFontSize(1),
//             }}>
//             <TouchableOpacity
//               onPress={() => {
//                 closeModal(false);
//               }}>
//               <Entypo
//                 name="cross"
//                 color={colors.blue}
//                 size={responsiveFontSize(3)}
//               />
//             </TouchableOpacity>
//           </View> */}
//           <Text>Share Log</Text>
//         </View>
//       </View>
//     </Modal>
//   );
// };

const Logs = ({logout}) => {
  const [isShowShareLogModal, setIsShowShareLogModal] = useState(false);

  return (
    <View style={styles.container}>
      {isShowShareLogModal && (
        <ShareLogModal
          visible={isShowShareLogModal}
          closeModal={setIsShowShareLogModal}
        />
      )}
      <Text style={styles.heading}>Excercise Logs</Text>
      <View
        style={{
          flex: 1,
          width: '100%',
          marginTop: responsiveHeight(4),
        }}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({item}) => (
            <CardItem setIsShowShareLogModal={setIsShowShareLogModal} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, i) => i.toString()}
          ListEmptyComponent={() => <NotFound text={'No data found'} />}
        />
      </View>
    </View>
  );
};

export default connect(null, authAct)(Logs);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  heading: {
    fontSize: responsiveFontSize(3),
    fontWeight: '800',
    color: colors.themeblue,
    marginTop: responsiveHeight(10),
  },
  cardItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: '5%',
  },
  cardCont: {
    borderWidth: 1,
    borderColor: colors.themeblue,
    borderRadius: responsiveFontSize(0.5),
    marginBottom: responsiveHeight(3),
  },
  shareLogCont: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveHeight(1),
    marginLeft: '2%',
  },

});
