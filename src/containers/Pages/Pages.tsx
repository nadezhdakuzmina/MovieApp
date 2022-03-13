import React from 'react';

import BottomNavigator from 'containers/BottomNavigator';
import Navigator from 'containers/Navigator';

import Feed from './Feed';

import createIcon from 'hooks/createIcon';

import * as P from './Pages.constants';

const BottomNav: React.FunctionComponent = React.memo(() => (
  <BottomNavigator
    pages={{
      [P.PAGE_FEED]: {
        Icon: createIcon('grid-outline'),
        Component: Feed,
        statusBarStyle: 'light',
      }
    }}
  />
));

export const PageController: React.FunctionComponent = React.memo(() => (
  <Navigator
    startPage={P.PAGE_MAIN}
    pages={{
      [P.PAGE_MAIN]: BottomNav
    }}
  />
));
