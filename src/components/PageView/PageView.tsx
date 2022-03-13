import React from 'react';

import { ScrollView, View, SafeAreaView } from 'react-native';

import { createStyles } from './PageView.styles';
import type * as T from './PageView.types';

export const PageView: React.FunctionComponent<T.ISaveAreaViewProps> = React.memo(
  ({
    children,
    statusBarColor,
    scrollDisabled,
    headerSlot,
    scrollViewRef,
    plain,
  }) => {
    const S = createStyles(statusBarColor);

    return (
      <SafeAreaView style={S.view}>
        <View style={S.statusBar} />
        {headerSlot && <View style={S.headerSlot}>{headerSlot}</View>}
        {plain ? (
          <View style={S.scrollView}>{children}</View>
        ) : (
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={S.scrollViewChild}
            style={S.scrollView}
            scrollEnabled={!scrollDisabled}
          >
            {children}
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
);
