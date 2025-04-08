import React, { forwardRef, PropsWithChildren, ReactNode, useRef } from 'react';
import { ScrollViewProps, ScrollView } from 'react-native';

export interface IScrollViewProps extends PropsWithChildren<ScrollViewProps> {
  children: ReactNode;
}

const ScrollViewComp = forwardRef<ScrollView, IScrollViewProps>(
  ({ children, ...props }, ref) => {
    const scrollViewRef = useRef(null);
    return (
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        ref={ref || scrollViewRef}
        {...props}
      >
        {children}
      </ScrollView>
    );
  },
);

export default ScrollViewComp;
