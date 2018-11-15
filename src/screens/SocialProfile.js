import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions, StyleSheet, ScrollView, Platform, Image, ActivityIndicator, Alert,
} from 'react-native';
import { Font, LinearGradient } from 'expo';
// galio components
import {
  Button, Block, Icon, Text, NavBar, Card,
} from 'galio-framework';
import theme from '../theme';

const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_GREY = ['#f3f3f3', '#ffffff'];
const GRADIENT_CRIMSON = ['#f96332', '#fe2472'];
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED;
const FONT_REGULAR = 'SFUIText-Regular';
const FONT_BOLD = 'SFUIText-Bold';
const { width } = Dimensions.get('screen');


const imageOne = require('../../assets/profile_screen/img1.png');
const imageTwo = require('../../assets/profile_screen/img2.png');
const imageThree = require('../../assets/profile_screen/img3.png');
const imageFour = require('../../assets/profile_screen/img4.png');
const imageFive = require('../../assets/profile_screen/img5.png');

// F O N T S
const SF_UI_REGULAR = require('../../assets/fonts/SF-UI-Text-Regular.otf');
const SF_UI_BOLD = require('../../assets/fonts/SF-UI-Text-Bold.otf');

const grids = [
  {
    id: 1,
    image: imageOne,
  },
  {
    id: 2,
    image: imageTwo,
  },
  {
    id: 3,
    image: imageThree,
  },
  {
    id: 4,
    image: imageFour,
  },
  {
    id: 5,
    image: imageFive,
  },
];


class SocialProfile extends React.Component {
  state = {
    fontsLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'SFUIText-Regular': SF_UI_REGULAR,
      'SFUIText-Bold': SF_UI_BOLD,
    });
    this.setState({ fontsLoaded: true });
  }

  renderHeader = navigation => (
    <NavBar
      back
      transparent
      title="Profile"
      right={(
        <Button
          onlyIcon
          icon="zoom-split"
          iconFamily="Galio"
          iconSize={BASE_SIZE}
          iconColor={COLOR_GREY}
          color="transparent"
          onPress={() => Alert.alert('Like it!')}
        />
      )}
      titleStyle={styles.titleStyle}
      leftIconColor={COLOR_GREY}
      onLeftPress={() => navigation.goBack()}
      style={Platform.OS === 'android' ? { marginTop: BASE_SIZE } : null}
    />
  );

  renderBio = () => (
    <Block style={styles.bioContainer}>
      <Block row space="between">
        <Block middle style={styles.bioAvatarWrap}>
          <Image source={{ uri: 'http://i.pravatar.cc/100' }} style={styles.bioAvatar} />
        </Block>
        <Block middle>
          <Button round style={styles.bioButton}>
            <LinearGradient
              colors={GRADIENT_CRIMSON}
              start={[0.1, 0.1]}
              style={styles.crimsonGradient}
            >
              <Icon
                size={BASE_SIZE * 1.5}
                name="plus"
                color={COLOR_WHITE}
                family="Entypo"
              />
              <Text color={COLOR_WHITE} style={styles.buttonTextStyle}>Follow</Text>
            </LinearGradient>
          </Button>
        </Block>
      </Block>
      <Block style={styles.bioInnerContainer}>
        <Text h2 color="#444" style={styles.bioHeading}>Julie Andrew</Text>
        <Text p muted style={styles.bioParagraph}>
          Hey there, I&#39;m a UI designer from Paris.
        </Text>
      </Block>
    </Block>
  );

  renderLevel = () => (
    <Block row card space="around" style={styles.levelCard}>
      <Block center>
        <Text h5 color="#444" style={styles.levelHeading}>100</Text>
        <Text p muted style={styles.levelParagraph}>Photos</Text>
      </Block>
      <Block center>
        <Text h5 color="#444" style={styles.levelHeading}>30</Text>
        <Text p muted style={styles.levelParagraph}>Articles</Text>
      </Block>
      <Block center>
        <Text h5 color="#444" style={styles.levelHeading}>4K</Text>
        <Text p muted style={styles.levelParagraph}>Followers</Text>
      </Block>
    </Block>
  );

  renderPhotos = () => (
    <Block>
      <Block row space="between" style={styles.headingWrapper}>
        <Text h6 color="#444" style={styles.leftHeading}>Photos</Text>
        <Text p muted style={styles.rightParagraph}>View more</Text>
      </Block>
      <Block row space="between" style={{ flexWrap: 'wrap' }}>
        {
          grids.map((grid, index) => (
            <Block shadow middle style={styles.column} key={`grid_${grid.id}`}>
              <Button color="transparent" style={styles.fullSize} onPress={() => Alert.alert(`You pressed number ${index + 1} image`)}>
                <Image source={grid.image} style={styles.fullSize} />
              </Button>
            </Block>
          ))
        }
        <Block shadow middle style={styles.column}>
          <Button
            style={styles.fullSize}
            onPress={() => Alert.alert('loading 95 more items...')}
          >
            <LinearGradient
              colors={GRADIENT_CRIMSON}
              start={[0.1, 0.1]}
              style={styles.crimsonGradient}
            >
              <Text color={theme.COLORS.WHITE} style={styles.buttonTextStyle}>+95</Text>
            </LinearGradient>
          </Button>
        </Block>
      </Block>
    </Block>
  );

  renderArticles = () => (
    <Block style={{ marginTop: 21 }}>
      <Block row space="between" style={styles.headingWrapper}>
        <Text h6 style={styles.leftHeading}>Articles</Text>
        <Text p muted style={styles.rightParagraph}>View more</Text>
      </Block>
      <Block>
        <Card
          flex
          borderless
          shadowColor={theme.COLORS.BLACK}
          style={styles.card}
          title="Galio App in Progress"
          caption="25 minutes ago"
          location="Lagos, Nigeria"
          avatar="http://i.pravatar.cc/100?id=pineaple"
          imageBlockStyle={styles.cardNoRadius}
          image="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300"
        />
      </Block>
    </Block>
  );

  render() {
    const { fontsLoaded } = this.state;
    const { navigation } = this.props;
    // S H O W - L O A D E R - W H E N - F O N T - I S - L O A D I N G
    if (!fontsLoaded) {
      return (
        <Block safe flex middle>
          <ActivityIndicator size="large" color="#fe2472" />
        </Block>
      );
    }
    // E L S E - S H O W - T H E - S C R E E N
    return (
      <Block safe flex>
        {/* G R E D I E N T - B A C K G R O U N D */}
        <LinearGradient
          colors={GRADIENT_GREY}
          start={[0.1, 0.1]}
          style={styles.backgroundGradient}
        />
        {/* H E A D E R */}
        {this.renderHeader(navigation)}

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Block style={styles.container}>
            {/* R E N D E R - M A I N - C O N T E N T S */}
            {this.renderBio()}

            {this.renderLevel()}

            {this.renderPhotos()}

            {this.renderArticles()}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

SocialProfile.propTypes = {
  navigation: PropTypes.object.isRequired,
};
const styles = StyleSheet.create({
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 0,
  },
  titleStyle: {
    fontFamily: FONT_REGULAR,
    lineHeight: 16,
  },
  container: {
    paddingHorizontal: theme.SIZES.BASE,
  },
  bioContainer: {
    marginBottom: 30,
    paddingHorizontal: 8,
  },
  bioAvatarWrap: {
    height: 55,
    width: 55,
    borderRadius: BASE_SIZE * 3.25,
    shadowColor: 'rgb(0,0,0)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: -3,
    elevation: 27,
    overflow: 'hidden',
  },
  bioAvatar: {
    height: '100%',
    width: '100%',
  },
  bioButton: {
    height: 32,
    overflow: 'hidden',
    shadowColor: 'rgb(0,0,0)',
    shadowOffset: { width: 0, height: 13 },
    shadowOpacity: 0.1,
    shadowRadius: -8,
    elevation: 11,
    width: 102,
  },
  buttonTextStyle: {
    fontFamily: FONT_REGULAR,
    lineHeight: 19,
  },
  bioInnerContainer: {
    marginTop: 16,
  },
  bioHeading: {
    fontFamily: FONT_BOLD,
    fontSize: 36,
    lineHeight: 43,
    marginBottom: 7,
  },
  bioParagraph: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 16,
  },
  levelCard: {
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: COLOR_WHITE,
    paddingTop: 17,
    paddingBottom: 12,
    marginBottom: 37,
    shadowColor: 'rgba(0,0,0, 0.1)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: -1,
    elevation: 34,
  },
  levelHeading: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 6,
  },
  levelParagraph: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    lineHeight: 14,
  },
  headingWrapper: {
    paddingHorizontal: 7,
    marginBottom: 11,
  },
  leftHeading: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 19,
  },
  rightParagraph: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    lineHeight: 14,
  },
  column: {
    height: width * 0.28,
    marginBottom: 15,
    width: width * 0.28,
  },
  fullSize: {
    borderWidth: 0,
    height: '100%',
    padding: 0,
    width: '100%',
  },
  crimsonGradient: {
    alignItems: 'center',
    borderRadius: 3,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
  },
});

export default SocialProfile;
