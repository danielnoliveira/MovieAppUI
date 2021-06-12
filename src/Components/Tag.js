import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Tag({disable, name, fn}) {
  return (
    <TouchableOpacity disabled={disable} onPress={fn} style={styles.tag}>
      <Text style={styles.tagName}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tag: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  tagName: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16.49,
  },
});
