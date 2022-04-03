import { Layout, Text } from '@ui-kitten/components';
import { Icon } from '@ui-kitten/components';

export const cash = (props: any) => (
  <Icon {...props} name='layers-outline'/>
);
const Cash = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Cash</Text>
  </Layout>
);

export default Cash;
