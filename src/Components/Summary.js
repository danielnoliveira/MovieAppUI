import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderTittle from './HeaderTittle';

export default function Summary() {
  return (
    <View style={{marginBottom: 38}}>
      <HeaderTittle content={'Plot Summary'} />
      <Text style={styles.pSummary}>
        American car designer Carroll Shelby and driver Kn Miles battle
        corporate interference and the laws of physics to build a revolutionary
        race car for Ford in order.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pSummary: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 24,
    color: '#737599',
  },
});
