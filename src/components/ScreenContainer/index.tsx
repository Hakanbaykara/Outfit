/* eslint-disable react-native/no-inline-styles */
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/theme';

interface IScreenContainer extends PropsWithChildren<ViewProps> {
  children: ReactNode;
  testID: string;
  backgroundColor?: string;
}

const ScreenContainer: FC<IScreenContainer> = ({
  children,
  testID,
  backgroundColor,
  ...props
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      testID={testID}
      style={[
        {
          flex: 1,
          backgroundColor: backgroundColor || Colors.white,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          overflow: 'hidden',
        },
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

ScreenContainer.defaultProps = {
  backgroundColor: '',
};

export default ScreenContainer;
