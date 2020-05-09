import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Loading from '../component/Loading';

import PickupRequest from '../screens/Home/PickupRequest';
import PickupRequestDetail from '../screens/Home/components/PickupRequestDetail';
import Pickup from '../screens/Pickup/Pickup';
import NewOrder from '../screens/NewOrder/NewOrder';
import History from '../screens/History/History';
import Account from '../screens/Account/Account';

const PickupRequestStack = createStackNavigator();
const PickupRequestStackScreen = () => (
  <PickupRequestStack.Navigator>
    <PickupRequestStack.Screen 
      name="PickupRequest" 
      component={PickupRequest}
      options={{
        headerTitle: props => <Image style={{ width: 127, height: 25 }} source={require('../assets/images/shipper.png')} />
      }}
    />
  </PickupRequestStack.Navigator>
);

const PickupStack = createStackNavigator();
const PickupStackScreen = () => (
  <PickupStack.Navigator>
    <PickupStack.Screen 
      name="Pickup" 
      component={Pickup}
      options={{
        headerTitle: props => <Image style={{ width: 127, height: 25 }} source={require('../assets/images/shipper.png')} />
      }}
    />
  </PickupStack.Navigator>
);

const NewOrderStack = createStackNavigator();
const NewOrderStackScreen = () => (
  <NewOrderStack.Navigator>
    <NewOrderStack.Screen 
      name="NewOrder" 
      component={NewOrder}
      options={{
        headerTitle: props => <Image style={{ width: 127, height: 25 }} source={require('../assets/images/shipper.png')} />
      }}
    />
  </NewOrderStack.Navigator>
);

const HistoryStack = createStackNavigator();
const HistoryStackScreen = () => (
  <HistoryStack.Navigator>
    <HistoryStack.Screen 
      name="History" 
      component={History}
      options={{
        headerTitle: props => <Image style={{ width: 127, height: 25 }} source={require('../assets/images/shipper.png')} />
      }}
    />
  </HistoryStack.Navigator>
);

const AccountStack = createStackNavigator();
const AccountStackScreen = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen 
      name="Account" 
      component={Account}
      options={{
        headerTitle: props => <Image style={{ width: 127, height: 25 }} source={require('../assets/images/shipper.png')} />
      }}
    />
  </AccountStack.Navigator>
);



const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator 
    initialRouteName="PickupRequest"
    tabBarOptions={{
      activeTintColor: '#f4473f',
      inactiveTintColor: '#a9a9a9'
    }}
  >
    <AppTabs.Screen
      name="PickupRequest"
      component={PickupRequestStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: props => (
          <Entypo name="home" size={props.size} color={props.color} />
        ),
      }}
    />
    <AppTabs.Screen
      name="Pickup"
      component={PickupStackScreen}
      options={{
        tabBarLabel: 'Pickup',
        tabBarIcon: props => (
          <Feather name="calendar" size={props.size} color={props.color} />
        ),
      }}
    />
    <AppTabs.Screen
      name="NewOrder"
      component={NewOrderStackScreen}
      options={{
        tabBarLabel: 'Bikin Order',
        tabBarIcon: props => (
          <Octicons name="package" size={props.size} color={props.color} />
        ),
      }}
    />
    <AppTabs.Screen
      name="History"
      component={HistoryStackScreen}
      options={{
        tabBarLabel: 'History',
        tabBarIcon: props => (
          <Ionicons type="ionicon" name="md-paper" size={props.size} color={props.color} />
        ),
      }}
    />
    <AppTabs.Screen
      name="Account"
      component={AccountStackScreen}
      options={{
        tabBarLabel: 'Akun',
        tabBarIcon: props => (
          <MaterialCommunityIcons name="account-circle-outline" size={props.size} color={props.color} />
        ),
      }}
    />
  </AppTabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 1500);
  }, []);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
      mode="modal"
    >
      {isLoading ? (
        <RootStack.Screen name="Loading" component={Loading} />
      ) : (
        <RootStack.Screen name="AppTabsScreen" component={AppTabsScreen} />
      )}

      <RootStack.Screen
        name="PickupRequestDetail"
        component={PickupRequestDetail}
        options={{ animationEnabled: true }}
      />
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};