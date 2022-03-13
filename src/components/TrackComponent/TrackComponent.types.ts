import type { ISongItem } from 'types';
import type { StyleProp, ViewStyle } from 'react-native';

export interface ITrackComponentProsp extends ISongItem {
  style?: StyleProp<ViewStyle>;
  withoutBorder?: boolean;
  isInList?: boolean;
}
