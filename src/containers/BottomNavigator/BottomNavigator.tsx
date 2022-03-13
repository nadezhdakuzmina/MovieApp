import React from 'react';

import {
  createBottomTabNavigator,
  BottomTabBarProps
} from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { setStatusBarStyle, StatusBarStyle } from 'expo-status-bar';

import { createStyles } from './BottomNavigator.styles';

import type * as T from './BottomNavigator.types';

export const BottomNavigator: React.FunctionComponent<T.IBottomNavigatorProps> = React.memo(
  ({ pages }) => {
    const { Navigator: Container, Screen } = createBottomTabNavigator();
    const statusBarStyles: StatusBarStyle[] = [];

    const S = createStyles();

    const tabBar = ({
      state,
      navigation,
    }: BottomTabBarProps): React.ReactNode => {
      const onSelect = (index: number) => {
        navigation.navigate(state.routeNames[index]);
      };

      setStatusBarStyle(statusBarStyles[state.index]);

      return (
        <BottomNavigation
          style={S.bottomNav}
          selectedIndex={state.index}
          onSelect={onSelect}
          appearance="noIndicator"
        >
          {Object.entries(pages).map(([key, page]) => (
            <BottomNavigationTab
              key={key}
              title={page.title}
              icon={page.Icon}
            />
          ))}
        </BottomNavigation>
      );
    };

    return (
      <Container tabBar={tabBar}>
        {Object.entries(pages).map(([key, page], index) => {
          statusBarStyles[index] = page.statusBarStyle;
          return (
            <Screen
              key={key}
              name={key}
              component={page.Component}
              options={{ headerShown: false }}
            />
          );
        })}
      </Container>
    );
  }
);
