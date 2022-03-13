import React from 'react';

import { Icon } from '@ui-kitten/components';

import type * as T from './createIcon.types';

export const createIcon = (
  iconName: string,
  otherProps?: any
): T.IIconRender => {
  const component: T.IIconRender = (props) => (
    <Icon {...props} {...otherProps} name={iconName} />
  );

  return component;
};
