import { registerRootComponent } from 'expo';

import Layout from 'containers/Layout';
import Pages from 'containers/Pages';

export const App = () => (
  <Layout>
    <Pages />
  </Layout>
);

export default registerRootComponent(App);

