import PageController from './PagesController';

import Cash, { cash } from './Pages/Cash';
import Home, { home } from './Pages/Home';
import List, { list }from './Pages/List';
import Profile, { PersonIcon } from './Pages/Profile';
import Sale, { sale } from './Pages/Sale';

import type { FC } from 'react';

const Pages: FC = () => (
  <PageController
    pages={[
      {
        Component: Sale,
        name: 'Sale',
        icon: sale
      },
      {
        Component: Cash,
        name: 'Cash',
        icon: cash
      },
      {
        Component: Home,
        name: 'Home',
        icon: home
      },
      {
        Component: List,
        name: 'List',
        icon: list
      },
      {
        Component: Profile,
        name: 'Profile',
        icon: PersonIcon
      },
    ]}
  />
);

export default Pages;
