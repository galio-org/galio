import React from 'react';
import Constants from 'expo-constants';
import {
  View,
  Animated,
  ScrollView,
  SafeAreaView,
  TouchableNativeFeedback,
  Dimensions,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const {
  Provider: TilesDimensionPropProvider,
  Consumer: TilesDimensionPropConsumer,
} = React.createContext([]);

const { width: deviceWidth } = Dimensions.get('window');
function Tiles({
  tiles,
  onPress,
  children,
  segmentType,
  startAnimation,
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
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={segmentType === 'default' || segmentType === 'horizontal'}
        contentContainerStyle={{ flexGrow: 1 }}>
        <TilesDimensionPropProvider value={tilesDimensions}>
          <View
            style={{
              flex: 1,
              flexDirection:
                segmentType === 'default' || segmentType === 'horizontal'
                  ? 'row'
                  : 'column',
            }}>
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
                }}
                {...{
                  key
                }}>
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
                  }}>
                  <Text>
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
  );
}

class Segment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.animaterPosition = new Animated.Value(0);
  }

  startAnimation = (animaterWidth, key) => {
    const {
      props: { segmentType },
      animaterPosition,
    } = this;
    if (segmentType !== 'vertical') {
      if (animaterWidth.length) {
        Animated.spring(animaterPosition, {
          toValue: animaterWidth[key] * key,
        }).start();
      }
    }
  };

  render() {
    const {
      segmentType,
      tiles,
      activeTabHighlighterPanelColor,
    } = this.props;

    return (
      <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <View>
          <Tiles
            {...{
              tiles,
              segmentType,
            }}
            startAnimation={this.startAnimation}>
            {segmentType !== 'vertical' && (
              <TilesDimensionPropConsumer>
                {animaterWidth => (
                  <Animated.View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: this.animaterPosition,
                      flex: 1,
                      width: animaterWidth[0],
                      height: 2,
                      backgroundColor: activeTabHighlighterPanelColor,
                    }}
                  />
                )}
              </TilesDimensionPropConsumer>
            )}
          </Tiles>
        </View>
      </SafeAreaView>
    );
  }
}

Segment.prototypes = {
    segmentType: PropTypes.oneOfType(['default', 'horizontal', 'vertical']),
    tiles: PropTypes.any,
    activeTabHighlighterPanelColor: PropTypes.string,
    children: PropTypes.any,
  };
  
  Segment.defaultProps = {
    segmentType: 'default',
    activeTabHighlighterPanelColor: '#7CB3FC',
  };
  
export default Segment;
