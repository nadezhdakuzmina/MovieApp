import React from 'react';

import * as theames from 'assets/theme';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';

import type * as T from './Layout.types';

export const ThemeContext = React.createContext<T.IThemeContext>(
  {} as T.IThemeContext
);

export const Layout: React.FunctionComponent<T.ILayoutProps> = ({
  children,
}) => {
  const [themeFlag, setThemeFlag] = React.useState<boolean>(true); // Сделать подвязку к локальному хранилищу

  const changeTheme = React.useCallback((): void => {
    setThemeFlag(!themeFlag);
  }, []);

  const themeName = themeFlag ? 'light' : 'dark';
  const theme: T.IThemeContext['theme'] = theames[themeName as T.IThemeType];

  return (
    <ThemeContext.Provider value={{ themeName, theme, changeTheme }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...theames} theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};
