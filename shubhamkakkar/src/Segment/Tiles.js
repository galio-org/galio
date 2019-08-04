import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Dimensions,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import { ActiveTilePropProvider } from './Context/ActiveTileContext';
import { TilesDimensionPropProvider } from './Context/TileDimensionsContext';
import theme from '../../theme';

const { width: deviceWidth } = Dimensions.get('window');
export default function Tiles({
  tiles,
  onPress: onPressCustom,
  onPressIn: onPressInCustom,
  onPressOut: onPressOutCustom,
  onLongPress: onLongPressCustom,
  delayPressIn,
  delayPressOut,
  delayLongPress,
  children,
  segmentType,
  inactiveTabTextStyle,
  activeTabTextStyle,
  startAnimation,
  tabPanels,
  tilesBackgroundColor,
}) {
  const [activeTile, setActiveTile] = React.useState(0);
  const [tilesDimensions, setTilesDimensions] = React.useState([]);

  function setLayout(width) {
    const temp = [...tilesDimensions, width];
    setTilesDimensions(temp);
  }

  React.useEffect(() => {
    if (tilesDimensions.length) {
      startAnimation(tilesDimensions, activeTile);
    }
  }, [activeTile]);
  return (
    <ActiveTilePropProvider value={activeTile}>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={segmentType === 'default' || segmentType === 'horizontal'}
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: tilesBackgroundColor,
          }}
        >
          <TilesDimensionPropProvider value={tilesDimensions}>
            <View
              style={{
                flex: 1,
                flexDirection:
                  segmentType === 'default' || segmentType === 'horizontal'
                    ? 'row'
                    : 'column',
                marginHorizontal: -(theme.SIZES.BASE - 2),
              }}
            >
              {tiles.map((res, key) => (
                <TouchableNativeFeedback
                  style={{
                    flex: 1,
                  }}
                  onLayout={({
                    nativeEvent: {
                      layout: { width },
                    },
                  }) => setLayout(width)}
                  onPress={e => {
                    setActiveTile(key);
                    onPressCustom && onPressCustom(e);
                  }}
                  onPressIn={e => {
                    onPressInCustom && onPressInCustom(e);
                  }}
                  onPressOut={e => {
                    onPressOutCustom && onPressOutCustom(e);
                  }}
                  onLongPress={e => {
                    onLongPressCustom && onLongPressCustom(e);
                  }}
                  {...{
                    key,
                    delayPressIn,
                    delayPressOut,
                    delayLongPress,
                  }}
                >
                  <View
                    style={{
                      padding: 10,
                      flex: 1,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderBottomColor:
                        segmentType === 'vertical'
                          ? activeTile === key
                            ? 'black'
                            : '#CFCFCF'
                          : '#CFCFCF',
                      minWidth: deviceWidth / 5,
                    }}
                  >
                    <Text
                      style={[
                        activeTile === key
                          ? activeTabTextStyle
                          : inactiveTabTextStyle,
                      ]}
                    >
                      {res}
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              ))}
              {children}
            </View>
          </TilesDimensionPropProvider>
        </ScrollView>
      </View>
      {tabPanels.map((res, key) => (
        <React.Fragment {...{ key }}>
          {activeTile === key && res}
        </React.Fragment>
      ))}
    </ActiveTilePropProvider>
  );
}

Tiles.defaultProps = {
  segmentType: 'default',
  inactiveTabTextStyle: { color: '#ccc' },
  activeTabTextStyle: { color: '#1a0dab' },
  tilesBackgroundColor: 'white',
};

Tiles.propTypes = {
  children: PropTypes.element.isRequired,
  segmentType: PropTypes.oneOf(['default', 'horizontal', 'vertical']),
  tiles: PropTypes.array.isRequired,
  tabPanels: PropTypes.array.isRequired,
  inactiveTabTextStyle: PropTypes.any,
  activeTabTextStyle: PropTypes.object,
  tilesBackgroundColor: PropTypes.string,
  startAnimation: PropTypes.func.isRequired,
};
