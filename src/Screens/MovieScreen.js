import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Animated,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderShow from '../Components/HeaderShow';
import Summary from '../Components/Summary';
import CastCrew from '../Components/CastCrew';
import MarkerContent from '../Components/MarkerContent';

const width = Dimensions.get('window').width;

function MovieScreen({route, navigation}) {
  const newLeft = useRef(new Animated.Value(1000)).current;
  const newOpacity = useRef(new Animated.Value(0)).current;
  const data = route.params;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(newLeft, {
        toValue: width * 0.05,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(newOpacity, {
        toValue: 1,
        duration: 1600,
        useNativeDriver: false,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView style={styles.svMainContainer}>
      <ImageBackground
        source={data.background}
        imageStyle={styles.imgBG}
        style={styles.bgShow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={48} color="black" />
        </TouchableOpacity>
        <Animated.View
          style={[styles.marker, {left: newLeft, opacity: newOpacity}]}>
          <MarkerContent />
        </Animated.View>
      </ImageBackground>
      <Animated.View
        style={{paddingHorizontal: width * 0.06808, opacity: newOpacity}}>
        <HeaderShow />
        <Summary />
        <CastCrew />
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  svMainContainer: {
    flex: 1,
  },
  bgShow: {
    width: '100%',
    height: 352,
  },
  imgBG: {
    borderBottomLeftRadius: 50,
  },
  backButton: {
    width: 48,
    top: 20,
    left: 16,
  },
  marker: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: 109,
    width: '95%',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: 'white',
    top: 252,
    left: width * 0.05,
    paddingLeft: 37,
    paddingRight: 11,
    paddingTop: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

export default MovieScreen;
