import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type * as T from './Navigator.types';

export const Navigator: React.FunctionComponent<T.INavigatorProps> = React.memo(
  ({ startPage, pages }) => {
    const { Navigator: Container, Screen } = createNativeStackNavigator();

    const mainComponent = pages[startPage];
    delete pages[startPage];

    return (
      <Container>
        <Screen
          key={startPage}
          name={startPage}
          component={mainComponent}
          options={{ headerShown: false }}
        />
        {Object.entries(pages).map(([key, Component]) => (
          <Screen
            key={key}
            name={key}
            component={Component}
            options={{ headerShown: false }}
          />
        ))}
      </Container>
    );
  }
);
