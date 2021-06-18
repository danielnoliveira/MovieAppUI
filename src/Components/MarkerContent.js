import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';

export default function MarkerContent() {
  return (
    <>
      <View style={styles.ratingTotal}>
        <IconFA name="star" color="#FCC419" size={32} />
        <Text style={styles.ratingTotalText}>8.2/10</Text>
        <Text style={styles.ratingTotalTextAll}>150.212</Text>
      </View>
      <TouchableOpacity style={styles.buttonRate}>
        <IconFA name="star-o" color="black" size={32} />
        <Text style={styles.buttonRateText}>Rate This</Text>
      </TouchableOpacity>
      <View style={styles.metascore}>
        <View style={styles.metascoreBox}>
          <Text style={styles.metascoreBoxText}>86</Text>
        </View>
        <Text style={styles.metascoreText}>Metascore</Text>
        <Text style={styles.metascoreCritics}>62 critics reviews</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ratingTotal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTotalText: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 19.49,
    marginTop: 4,
  },
  ratingTotalTextAll: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 14.62,
    color: '#9A9BB2',
    marginTop: 2,
  },
  buttonRate: {
    alignItems: 'center',
  },
  buttonRateText: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 19.49,
    marginTop: 4,
  },
  metascore: {
    alignItems: 'center',
  },
  metascoreBox: {
    width: 28,
    height: 24,
    backgroundColor: '#51CF66',
    borderRadius: 2,
    marginBottom: 12,
  },
  metascoreBoxText: {
    marginHorizontal: 5.5,
    marginVertical: 3.5,
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 17.05,
    color: 'white',
  },
  metascoreText: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 19.49,
  },
  metascoreCritics: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 14.62,
    color: '#9A9BB2',
  },
});
