import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Genre from '../Components/Genre';
import Header from '../Components/Header';
import Section from '../Components/Section';
import ShowsPoster from '../Components/ShowsPoster';

function HomeScreen({navigation, leftMenu}) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header openMenu={() => leftMenu.openDrawer()} />
      <Section />
      <Genre />
      <ShowsPoster goToShow={data => navigation.navigate('Movie', {...data})} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
