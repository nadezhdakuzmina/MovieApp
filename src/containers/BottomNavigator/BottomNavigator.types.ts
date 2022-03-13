import type { IIconRender } from 'hooks/createIcon/createIcon.types';
import type { StatusBarStyle } from 'expo-status-bar';

export interface IBottomNavigatorProps {
  pages: {
    [key: string]: IPage;
  };
}

export interface IPage {
  Component: React.FunctionComponent<any>;
  title?: string;
  Icon?: IIconRender;
  statusBarStyle?: StatusBarStyle;
}
