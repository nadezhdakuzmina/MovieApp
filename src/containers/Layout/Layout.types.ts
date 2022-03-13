import { StatusBarStyle } from 'expo-status-bar';

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface IThemeContext {
  themeName: StatusBarStyle;
  theme: ITheme & any;
  changeTheme: () => void;
}

export interface ITheme {
  getColor: (name: string) => string;
}

export type IThemeType = 'light' | 'dark';
