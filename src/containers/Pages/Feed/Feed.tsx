import React from 'react';

import { Text } from 'react-native';
import { Layout } from '@ui-kitten/components';
import PageView from 'components/PageView';

import { createStyles } from './Feed.styles';

import { ThemeContext } from 'containers/Layout';

export const Feed: React.FunctionComponent = React.memo(() => {
  const { theme } = React.useContext(ThemeContext);

  const mainColor: string = theme['color-primary-active'];

  const S = createStyles();

  return (
    <PageView statusBarColor={mainColor}>
      <Layout style={S.layout}>
        <Text>Hello world</Text>
      </Layout>
    </PageView>
  );
});
