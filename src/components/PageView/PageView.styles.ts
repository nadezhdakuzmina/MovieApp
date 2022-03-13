import { StatusBar } from 'react-native';

import createStyleSheat from 'utils/createStyleSheat';

const statusBarHeight = StatusBar.currentHeight;

export const createStyles = createStyleSheat(({ theme }, statusBarColor) => ({
  view: {
    flex: 1,
    marginTop: statusBarHeight,
  },

  statusBar: {
    height: statusBarHeight,
    width: '100%',
    marginTop: -statusBarHeight,
    backgroundColor: statusBarColor || theme['background-basic-color-1'],
  },

  scrollView: {
    flex: 1,
  },

  headerSlot: {
    backgroundColor: theme['background-basic-color-1'],
  },

  scrollViewChild: {
    flexGrow: 1,
  },
}));
