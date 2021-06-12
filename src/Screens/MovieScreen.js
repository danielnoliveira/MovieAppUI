import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Animated,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import HeaderShow from '../Components/HeaderShow';
import Summary from '../Components/Summary';
import CastCrew from '../Components/CastCrew';

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
    <ScrollView style={{flex: 1}}>
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
          style={[styles.tagShow, {left: newLeft, opacity: newOpacity}]}>
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
  tagShow: {
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

export default MovieScreen;
