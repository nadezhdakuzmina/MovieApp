import React from 'react';

import { Image, View } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';

import createIcon from 'hooks/createIcon';

import { createStyles } from './TrackComponent.styles';

import * as T from './TrackComponent.types';

export const TrackComponent: React.FunctionComponent<T.ITrackComponentProsp> = React.memo(
  ({ name, groupName, imageUrl, style, withoutBorder, isInList }) => {
    const S = createStyles();

    return (
      <Layout style={[S.root, !withoutBorder && S.withBorder, style]}>
        <Image source={{ uri: imageUrl }} style={S.image} />
        <View style={S.content}>
          <Text style={[S.titleText, S.name]} numberOfLines={1}>
            {name}
          </Text>
          <Text style={S.titleText} numberOfLines={1}>
            {groupName}
          </Text>
        </View>
        <Button
          appearance="ghost"
          status="primary"
          accessoryLeft={
            isInList ? createIcon('star') : createIcon('star-outline')
          }
        />
      </Layout>
    );
  }
);
