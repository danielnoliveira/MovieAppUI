import React from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
const image_width = 270;
const x_offset_divisor = 392.7272644042969;

export default function Poster({scrollX, index, data, goToShow}) {
  const {movie, poster, rating} = data;
  const inputRange = [
    (index - 1) * x_offset_divisor,
    index * x_offset_divisor,
    (index + 1) * x_offset_divisor,
  ];
  const getOpacity = () => {
    const newOpacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.3, 1, 0.3],
      extrapolate: 'clamp',
    });
    return newOpacity;
  };
  const getRotate = () => {
    const newRotate = scrollX.interpolate({
      inputRange,
      outputRange: ['10deg', '0deg', '-10deg'],
      extrapolate: 'clamp',
    });
    return newRotate;
  };
  const getScale = () => {
    const newScale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });
    return newScale;
  };
  const newScale = getScale();
  const newRotate = getRotate();
  const newOpacity = getOpacity();
  return (
    <Animated.View
      style={[
        styles.card,
        {
          opacity: newOpacity,
          transform: [{rotate: newRotate}, {scale: newScale}],
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => goToShow(data)}
        style={styles.boxShadow}>
        <Image style={styles.posterImage} source={poster} />
      </TouchableOpacity>
      <View style={styles.cardInfo}>
        <Text
          style={[styles.showTitle, movie.length > 18 ? {fontSize: 20} : {}]}>
          {movie}
        </Text>
        <Text style={styles.showRating}>
          <Icon name="star" color="#FCC419" size={20} />
          &nbsp; {rating}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: (width - image_width) / 2,
  },
  posterImage: {
    width: image_width,
    height: 350,
    borderRadius: 50,
  },
  boxShadow: {
    height: 351,
    overflow: 'hidden',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 7,
    marginBottom: 12,
  },
  cardInfo: {},
  showTitle: {
    color: '#12153D',
    fontFamily: 'Roboto',
    fontSize: 28,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 34.89,
    textAlign: 'center',
  },
  showRating: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: '#12153D',
    fontSize: 22,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 24.92,
  },
});
