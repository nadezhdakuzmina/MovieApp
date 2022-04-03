import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import type { FC } from 'react';

const Layout: FC = (props) => {
  const { children } = props;

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <IconRegistry icons={EvaIconsPack} />
      {children}
    </ApplicationProvider>
  );
};

export default Layout;
