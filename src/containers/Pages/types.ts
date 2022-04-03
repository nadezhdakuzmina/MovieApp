import type { FC } from 'react';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export type Pages = {
  Component: FC;
  name: string;
  icon: any;
}[];

export interface PageControllerProps {
  pages: Pages;
}

export interface TabBarProps extends BottomTabBarProps {
  pages: Pages;
}
