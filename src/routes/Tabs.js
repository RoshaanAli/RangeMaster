import React from 'react';
import CustomTabComp from '../components/CustomTabComp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import Octicons from 'react-native-vector-icons/Octicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logs from '../screens/LogsScreen/Logs';
import HomeRoutes from './HomeRoutes';

const Tab = createBottomTabNavigator();

function Tabs({authRed}) {
  //   useEffect(() => {
  //     if (authRed?.success) {
  //       requestUserPermission();
  //     }
  //   }, [authRed.success]);

  async function requestUserPermission() {
    console.log('requestUserPermission');
    // const authStatus = await messaging().requestPermission();
    // const enabled =
    //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    // if (enabled) {
    //   messaging()
    //     .subscribeToTopic('orme')
    //     .then(() => console.log('Subscribed to topic!'));
    //   const token = await messaging().getToken();
    //   console.log(token);
    // }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            marginBottom: 5,
          },
          unmountOnBlur: true,
        }}
        initialRouteName="Home"
        tabBar={props => <CustomTabComp {...props} />}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({color}) => (
              <Octicons name="home" size={22} color={color} />
            ),
          }}>
          {props => <HomeRoutes {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name="Logs"
          options={{
            headerShown: false,
          }}>
          {props => <Logs {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name="Shop"
          component={Logs}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Account"
          component={Logs}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default connect(null, null)(Tabs);
