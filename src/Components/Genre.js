import React from 'react';
import {Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
const data = ['Action', 'Crime', 'Comedy', 'Drama'];

export default function Genre() {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={styles.svContainer}
      contentContainerStyle={styles.svContentContainer}>
      {data.map((d, index) => {
        return (
          <TouchableOpacity key={index} style={styles.item}>
            <Text style={styles.itemText}>{d}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  svContainer: {
    flexGrow: 0,
    marginBottom: 29,
  },
  svContentContainer: {
    height: 50,
  },
  item: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#c1c1c1',
    marginHorizontal: 10,
  },
  itemText: {
    fontFamily: 'Roboto',
    lineHeight: 24.36,
    fontSize: 20,
    fontWeight: '500',
  },
});
