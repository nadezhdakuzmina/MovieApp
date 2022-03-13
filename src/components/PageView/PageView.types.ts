import { ScrollView } from 'react-native';

export interface ISaveAreaViewProps {
  children: React.ReactNode;
  statusBarColor?: string;
  scrollDisabled?: boolean;
  headerSlot?: React.ReactNode;
  scrollViewRef?: React.MutableRefObject<ScrollView>;
  plain?: boolean;
}
