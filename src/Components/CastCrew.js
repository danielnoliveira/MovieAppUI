import React from 'react';
import {View} from 'react-native';
import HeaderTittle from './HeaderTittle';
import People from './People';

const images = [
  require('./../../assets/Ellipse1.png'),
  require('./../../assets/Ellipse2.png'),
  require('./../../assets/Ellipse3.png'),
  require('./../../assets/Ellipse4.png'),
];

export default function CastCrew() {
  return (
    <View>
      <HeaderTittle content={'Cast & Crew'} />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <People img={images[0]} name={'James Mangold'} alterEgo={'Director'} />
        <People img={images[1]} name={'Matt Damon'} alterEgo={'Carroll'} />
        <People
          img={images[2]}
          name={'Christian Bale'}
          alterEgo={'Ken Miles'}
        />
        <People img={images[3]} name={'Caitriona Balfe'} alterEgo={'Mollie'} />
      </View>
    </View>
  );
}
