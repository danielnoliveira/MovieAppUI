import React from 'react';
import {Text} from 'react-native';

export default function HeaderTittle({content}) {
  return (
    <Text
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 29.49,
        marginBottom: 16,
      }}>
      {content}
    </Text>
  );
}
