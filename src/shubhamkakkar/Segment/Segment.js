import React from 'react';
import { View, Animated, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Tiles from './Tiles';
import { TilesDimensionPropConsumer } from './Context/TileDimensionsContext';
import { ActiveTilePropConsumer } from './Context/ActiveTileContext';
import theme from '../../theme';
const { width: deviceWidth } = Dimensions.get('window');
class Segment extends React.PureComponent {
  static defaultProps = {
    segmentType: 'default',
    inactiveTabTextStyle: { color: '#ccc' },
    activeTabTextStyle: { color: '#1a0dab' },
    activeTabHighlighterPanelColor: '#E91E63',
    tilesBackgroundColor: 'white',
  };

  constructor(props) {
    super(props);
    this.animatorPosition = new Animated.Value(0);
  }

  startAnimation = (animatorWidth, key) => {
    const {
      props: { segmentType },
      animatorPosition,
    } = this;
    if (segmentType !== 'vertical') {
      if (animatorWidth.length) {
        Animated.spring(animatorPosition, {
          toValue: animatorWidth[key] * key,
        }).start();
      }
    }
  };

  render() {
    const {
      segmentType,
      tiles,
      inactiveTabTextStyle,
      activeTabTextStyle,
      activeTabHighlighterPanelColor,
      children,
      tilesBackgroundColor,
    } = this.props;

    return (
      <View
        style={{
          flex: 1,
          width: deviceWidth,
          marginHorizontal: -(theme.SIZES.BASE - 2),
        }}
      >
        <Tiles
          {...{
            tiles,
            segmentType,
            inactiveTabTextStyle,
            activeTabTextStyle,
            tilesBackgroundColor,
          }}
          tabPanels={children}
          startAnimation={this.startAnimation}
        >
          {segmentType !== 'vertical' && (
            <TilesDimensionPropConsumer>
              {animatorWidth => (
                <ActiveTilePropConsumer>
                  {activeTile => (
                    <Animated.View
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: this.animatorPosition,
                        flex: 1,
                        width: animatorWidth[activeTile],
                        height: 2,
                        backgroundColor: activeTabHighlighterPanelColor,
                      }}
                    />
                  )}
                </ActiveTilePropConsumer>
              )}
            </TilesDimensionPropConsumer>
          )}
        </Tiles>
      </View>
    );
  }
}

Segment.propTypes = {
  children: PropTypes.array.isRequired,
  segmentType: PropTypes.oneOf(['default', 'horizontal', 'vertical']),
  tiles: PropTypes.array.isRequired,
  inactiveTabTextStyle: PropTypes.any,
  activeTabTextStyle: PropTypes.object,
  activeTabHighlighterPanelColor: PropTypes.string,
  tilesBackgroundColor: PropTypes.string,
};
export default Segment;
