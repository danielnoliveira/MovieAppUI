import React, {useRef} from 'react';
import {ScrollView, StyleSheet, Animated} from 'react-native';
import Poster from './Poster';

const data = [
  {
    movie: 'Ford v Ferrari',
    poster: require('./../../assets/john_wick_chapter_three_ver2.png'),
    rating: 4.8,
    background: require('./../../assets/john_wick_chapter_three_ver2_long.png'),
  },
  {
    movie: 'Call of the Wild',
    poster: require('./../../assets/call_of_the_wild_ver2.png'),
    rating: 4.5,
    background: require('./../../assets/john_wick_chapter_three_ver2_long.png'),
  },
  {
    movie: "There's something in the water",
    poster: require('./../../assets/theres_something_in_the_water.png'),
    rating: 3.5,
    background: require('./../../assets/john_wick_chapter_three_ver2_long.png'),
  },
];

export default function ShowsPoster({goToShow}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const MultipleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {contentOffset: {x: scrollX}},
        },
      ],
      {
        listener: evt => {},
        useNativeDriver: false,
      },
    )(event);
  };
  return (
    <ScrollView
      centerContent={true}
      pagingEnabled={true}
      style={styles.wrapper}
      onScroll={MultipleOnScroll}
      contentContainerStyle={styles.wrapperContent}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {data.map((p, index) => {
        return (
          <Poster
            key={index}
            goToShow={goToShow}
            index={index}
            scrollX={scrollX}
            data={p}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 0,
  },
  wrapperContent: {
    justifyContent: 'space-between',
  },
});
