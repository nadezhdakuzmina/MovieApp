import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

import type { FC } from 'react';
import type { PageControllerProps, TabBarProps } from './types';


const { Navigator, Screen } = createBottomTabNavigator();

const TabBar: FC<TabBarProps> = (props) => {
  const { navigation, state, pages } = props;

  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      {pages.map(({ name, icon }) => (
        <BottomNavigationTab
          key={name}
          icon={icon}
        />
      ))}
    </BottomNavigation>
  );
};

const PageController: FC<PageControllerProps> = (props) => {
  const { pages } = props;

  return (
    <NavigationContainer>
      <Navigator
        tabBar={(props) => <TabBar pages={pages} {...props} />}
        screenOptions={{
          headerShown: false
        }}
      >
        {pages.map(({ Component, name }) => (
          <Screen
            key={name}
            name={name}
            component={Component}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default PageController;
