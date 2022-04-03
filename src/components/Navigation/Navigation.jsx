import React from 'react';
import { registerRootComponent } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout as UILayout, Text } from '@ui-kitten/components';

const { Navigator, Screen } = createBottomTabNavigator();

const UsersScreen = () => (
  <UILayout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </UILayout>
);

const OrdersScreen = () => (
  <UILayout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </UILayout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='ORDERS'/>
    <BottomNavigationTab title='USERS'/>
  </BottomNavigation>
);

export const Navigate = (props) => {

  return (
    <NavigationContainer>
      <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Users' component={UsersScreen}/>
        <Screen name='Orders' component={OrdersScreen}/>
      </Navigator>
    </NavigationContainer>
  );
};