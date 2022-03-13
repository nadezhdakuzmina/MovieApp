import type { StyleProp } from 'react-native';

export interface ITheme {
  theme: any;
  themeName: string;
}

export type IFuncInput = (theme: ITheme, props?: any) => StyleProp<any>;

export type IFuncOutput = (props?: any) => StyleProp<any>;
