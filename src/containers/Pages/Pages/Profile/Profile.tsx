import { Layout, Text } from '@ui-kitten/components';
import { Icon } from '@ui-kitten/components';

export const PersonIcon = (props: any) => (
  <Icon {...props} name='person-outline'/>
);

const Profile = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Profile</Text>
  </Layout>
);

export default Profile;
