import { Layout, Text } from '@ui-kitten/components';
import { Icon } from '@ui-kitten/components';

export const home = (props: any) => (
  <Icon {...props} name='home-outline'/>
);
const Home = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Home</Text>
  </Layout>
);

export default Home;
