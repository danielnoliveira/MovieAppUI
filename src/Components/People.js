import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function People({img, name, alterEgo}) {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.alterego}>{alterEgo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 12,
    width: 80,
    marginRight: 28,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 19.49,
    textAlign: 'center',
    marginBottom: 4,
  },
  alterego: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 19.49,
    color: '#737599',
  },
});
