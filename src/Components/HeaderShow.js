import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Tag from './Tag';

const width = Dimensions.get('window').width;

export default function HeaderShow() {
  return (
    <View style={styles.headerShow}>
      <View style={styles.headerShowRow}>
        <View style={styles.headerShowCell}>
          <Text style={styles.showName}>Ford v Ferrari</Text>
          <View style={styles.showSecondInfo}>
            <Text style={styles.showSecondInfoText}>2019</Text>
            <Text style={styles.showSecondInfoText}>PG-13</Text>
            <Text style={styles.showSecondInfoText}>2h 32min</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
          <Text style={styles.addButtonIcon}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tagList}>
        <Tag disable name={'drama'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerShow: {
    marginTop: 82,
    marginBottom: 26,
  },
  headerShowRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerShowCell: {},
  showName: {
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 36.98,
    marginBottom: 8,
  },
  showSecondInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  showSecondInfoText: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 19.48,
  },
  addButton: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#FE6D8E',
  },
  addButtonIcon: {
    fontSize: 48,
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontStyle: 'normal',
    color: 'white',
    lineHeight: 60,
    textAlign: 'center',
  },
  tagList: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
