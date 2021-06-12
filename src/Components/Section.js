import React, {useState, useRef} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';

const data = ['In Theater', 'Box Office', 'Coming Soon'];
const width = Dimensions.get('window').width;

export default function Section() {
  const [section, setSection] = useState(0);
  const [dataLayout, setDataLayout] = useState([]);
  const svRef = useRef();
  const left = useRef(new Animated.Value(20)).current;

  const moveTo = newLeft => {
    Animated.timing(left, {
      toValue: newLeft,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <ScrollView
      ref={svRef}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={styles.svContainer}
      contentContainerStyle={styles.svContentContainer}>
      {data.map((d, index) => {
        return (
          <TouchableOpacity
            key={index}
            onLayout={evt => {
              const layout = evt.nativeEvent.layout;
              var newX = layout.x - (width - layout.width) / 2;
              const newDL = [{x: newX, y: layout.y, oldX: layout.x}];
              setDataLayout([...dataLayout, ...newDL]);
            }}
            disabled={index === section}
            onPress={() => {
              var {x, y, oldX} = dataLayout[index];
              moveTo(oldX);
              svRef.current.scrollTo({x, y, animated: true});
              setSection(index);
            }}
            style={styles.itemSection}>
            <Text
              style={[
                styles.itemText,
                index === section ? styles.itemTextActive : {},
              ]}>
              {d}
            </Text>
          </TouchableOpacity>
        );
      })}
      <Animated.View style={[styles.pinkBar, {bottom: 0, left: left}]} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  svContainer: {
    flexGrow: 0,
    marginBottom: 36,
  },
  svContentContainer: {
    height: 50,
  },
  itemSection: {
    marginHorizontal: 15,
  },
  itemText: {
    fontFamily: 'Roboto',
    lineHeight: 36.88,
    fontSize: 32,
    fontWeight: '700',
    opacity: 0.3,
  },
  itemTextActive: {
    opacity: 1,
  },
  pinkBar: {
    width: 40,
    height: 6,
    backgroundColor: '#FE6D8E',
    borderRadius: 100,
    position: 'absolute',
  },
});
