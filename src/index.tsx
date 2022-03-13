import React from 'react';
import { registerRootComponent } from 'expo';

import Layout from 'containers/Layout';
import PageController from 'containers/Pages';

export const App: React.FunctionComponent = () => (
  <Layout>
    <PageController />
  </Layout>
);

export default registerRootComponent(App);
