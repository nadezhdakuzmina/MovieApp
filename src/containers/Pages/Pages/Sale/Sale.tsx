import { Layout, Text } from '@ui-kitten/components';
import { Icon } from '@ui-kitten/components';

export const sale = (props: any) => (
  <Icon {...props} name='percent-outline'/>
);
const Sale = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Sale</Text>
  </Layout>
);

export default Sale;
