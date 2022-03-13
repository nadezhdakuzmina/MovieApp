import React from 'react';

import { StyleSheet } from 'react-native';
import { ThemeContext } from 'containers/Layout';

import type * as T from './createStyleSheat.types';

export const createStyleSheat = (func: T.IFuncInput): T.IFuncOutput => (
  props
) => {
  const context = React.useContext(ThemeContext);
  const themeContext: T.ITheme = {
    theme: context.theme,
    themeName: context.themeName,
  };

  const styles = React.useMemo(() => func(themeContext, props), [
    themeContext,
    props,
  ]);

  return StyleSheet.create(styles);
};
