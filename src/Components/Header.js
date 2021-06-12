import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MenuIcon from './../../assets/menu.png';

const width = Dimensions.get('window').width;

export default function Header({openMenu}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openMenu} style={styles.headerButton}>
        <Image source={MenuIcon} style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Search Button touched!!')}
        style={styles.headerButton}>
        <Icon name="search" size={32} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.06808,
    marginTop: 40,
    marginBottom: 48,
  },
  headerButton: {
    width: 32,
  },
  menuIcon: {
    width: 32,
    height: 32,
  },
});
