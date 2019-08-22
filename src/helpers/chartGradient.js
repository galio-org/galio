import React from 'react';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

export default class ChartGradient extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Defs>
        <LinearGradient
          id={'gradient'}
          x1={'0%'}
          y1={'0%'}
          x2={'0%'}
          y2={'100%'}
        >
          <Stop
            offset={'0%'}
            stopColor={'rgb(134, 65, 244)'}
            stopOpacity={0.8}
          />
          <Stop
            offset={'100%'}
            stopColor={'rgb(254, 70, 207)'}
            stopOpacity={0.2}
          />
        </LinearGradient>
      </Defs>
    );
  }
}
