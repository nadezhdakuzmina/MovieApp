import { Layout, Text } from '@ui-kitten/components';
import { Icon } from '@ui-kitten/components';

export const list = (props: any) => (
  <Icon {...props} name='file-text-outline'/>
);
const List = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>List</Text>
  </Layout>
);

export default List;
