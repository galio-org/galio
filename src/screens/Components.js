import React from 'react';
import {
  Dimensions, StyleSheet, ScrollView, Alert, Platform,
} from 'react-native';
import { LinearGradient } from 'expo';

// galio components
import {
  Text, Block, Button, Card, NavBar, Input, Slider, Radio, Checkbox, Switch,
} from 'galio-framework';
import theme from '../theme';

const { width } = Dimensions.get('screen');

export default class Components extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex>
        <NavBar
          title="Galio components"
          right={(
            <Button
              onlyIcon
              icon="heart-2"
              iconFamily="Galio"
              iconSize={theme.SIZES.BASE}
              iconColor={theme.COLORS.ICON}
              color="transparent"
              onPress={() => Alert.alert('Like it!')}
            />
          )}
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Block style={styles.container}>
            {/* Buttons examples using Button component */}
            <Block flex style={{ marginBottom: theme.SIZES.BASE }}>
              <Block flex style={{ padding: theme.SIZES.BASE }}>
                <Text h5>Buttons</Text>
              </Block>
              <Block flex center style={{ padding: theme.SIZES.BASE }}>
                <Button style={styles.button} round>
                  Primary
                </Button>
                <Button color="info" style={styles.button} round>
                  Info
                </Button>
                <Button style={styles.button} color="success" round>
                  Success
                </Button>
                <Button color="warning" style={styles.button} round>
                  Warning
                </Button>
                <Button color="error" style={styles.button} round>
                  Error
                </Button>
              </Block>
            </Block>
            {/* Typography examples using Text component */}
            <Block flex style={{ marginBottom: theme.SIZES.BASE }}>
              <Block flex style={{ padding: theme.SIZES.BASE }}>
                <Text h5>Typography</Text>
              </Block>
              <Block style={{ padding: theme.SIZES.BASE }}>
                <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h1>Heading 1</Text>
                <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h2>Heading 2</Text>
                <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h3>Heading 3</Text>
                <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h4>Heading 4</Text>
                <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h5>Heading 5</Text>
                <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} p>Paragraph</Text>
                <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} p muted>
                  This is a muted paragraph.
                </Text>
              </Block>
            </Block>
            {/* Inputs examples using Input component */}
            <Block flex>
              <Block flex style={{ padding: theme.SIZES.BASE }}>
                <Text h5>Inputs</Text>
              </Block>
              <Block style={{ padding: theme.SIZES.BASE }}>
                <Input rounded placeholder="placeholder" />
                <Input
                  rounded
                  placeholder="theme"
                  placeholderTextColor={theme.COLORS.THEME}
                  style={{ borderColor: theme.COLORS.THEME }}
                />
                <Input
                  rounded
                  placeholder="info"
                  placeholderTextColor={theme.COLORS.INFO}
                  style={{ borderColor: theme.COLORS.INFO }}
                />
                <Input
                  rounded
                  placeholder="warning"
                  placeholderTextColor={theme.COLORS.WARNING}
                  style={{ borderColor: theme.COLORS.WARNING }}
                />
                <Input
                  rounded
                  placeholder="error"
                  placeholderTextColor={theme.COLORS.ERROR}
                  style={{ borderColor: theme.COLORS.ERROR }}
                />
                <Input
                  rounded
                  placeholder="success"
                  placeholderTextColor={theme.COLORS.SUCCESS}
                  style={{ borderColor: theme.COLORS.SUCCESS }}
                />
                <Input rounded password viewPass placeholder="password" />
                <Input rounded icon="heart-2" family="Galio" placeholder="icon right" right />
                <Input
                  rounded
                  borderless
                  placeholder="borderless"
                  placeholderTextColor={theme.COLORS.WHITE}
                  color={theme.COLORS.WHITE}
                  bgColor={theme.COLORS.THEME}
                />
              </Block>
            </Block>
            {/* NavBars examples using NavBar component */}
            <Block flex style={{ marginBottom: theme.SIZES.BASE }}>
              <Block flex style={{ padding: theme.SIZES.BASE }}>
                <Text h5>Navigation</Text>
              </Block>
              <Block>
                <NavBar
                  back
                  title="Chart"
                  leftStyle={{ marginRight: 0 }}
                  leftIconColor={theme.COLORS.MUTED}
                  rightStyle={{ alignSelf: 'flex-end' }}
                  onLeftPress={() => Alert.alert('Back')}
                  style={{ width, marginHorizontal: -(theme.SIZES.BASE - 2) }}
                  right={(
                    <Button
                      onlyIcon
                      icon="settings-gear-65"
                      color="transparent"
                      iconFamily="Galio"
                      iconColor={theme.COLORS.MUTED}
                      iconSize={theme.SIZES.BASE * 1.0625}
                      onPress={() => Alert.alert('Settings')}
                    />
                  )}
                />

                <NavBar
                  title="Feed"
                  titleStyle={{ alignSelf: 'flex-start' }}
                  onLeftPress={() => Alert.alert('Menu')}
                  rightStyle={{ flexDirection: 'row' }}
                  leftStyle={{ flex: 0.4 }}
                  style={{ width, marginHorizontal: -(theme.SIZES.BASE - 2) }}
                  right={[
                    <Button
                      key="right-heart"
                      onlyIcon
                      icon="heart-2"
                      iconFamily="Galio"
                      color="transparent"
                      iconColor={theme.COLORS.BLACK}
                      iconSize={theme.SIZES.BASE * 1.0625}
                      onPress={() => Alert.alert('Like!')}
                      style={{ marginRight: theme.SIZES.BASE }}
                    />,
                    <Button
                      key="right-search"
                      onlyIcon
                      icon="zoom-split"
                      color="transparent"
                      iconFamily="Galio"
                      iconColor={theme.COLORS.BLACK}
                      iconSize={theme.SIZES.BASE * 1.0625}
                      onPress={() => Alert.alert('Search')}
                    />,
                  ]}
                />

                <NavBar
                  title="Terms of Services"
                  leftStyle={{ flex: 0.4 }}
                  onLeftPress={() => Alert.alert('Back')}
                  titleStyle={{ alignSelf: 'flex-start' }}
                  style={{ width, marginHorizontal: -(theme.SIZES.BASE - 2) }}
                  right={[
                    <Button
                      key="right-location"
                      onlyIcon
                      icon="pin-3"
                      iconFamily="Galio"
                      color="transparent"
                      iconColor={theme.COLORS.MUTED}
                      iconSize={theme.SIZES.BASE * 1.0625}
                      onPress={() => Alert.alert('Like!')}
                      style={{ marginRight: theme.SIZES.BASE }}
                    />,
                    <Button
                      key="right-search"
                      onlyIcon
                      icon="zoom-split"
                      color="transparent"
                      iconFamily="Galio"
                      iconColor={theme.COLORS.MUTED}
                      iconSize={theme.SIZES.BASE * 1.0625}
                      onPress={() => Alert.alert('Search')}
                    />,
                  ]}
                />

                <NavBar
                  title="Discover"
                  style={{ backgroundColor: theme.COLORS.THEME, width, marginHorizontal: -(theme.SIZES.BASE - 2) }}
                  titleStyle={{ color: theme.COLORS.WHITE }}
                  rightStyle={{ alignSelf: 'flex-end' }}
                  leftIconColor={theme.COLORS.WHITE}
                  onLeftPress={() => Alert.alert('Menu')}
                  right={(
                    <Button
                      onlyIcon
                      color="transparent"
                      icon="zoom-split"
                      iconFamily="Galio"
                      iconColor={theme.COLORS.WHITE}
                      iconSize={theme.SIZES.BASE * 1.0625}
                      onPress={() => Alert.alert('Search')}
                    />
                  )}
                />
              </Block>
            </Block>
            {/* Cards examples using Card/Block component */}
            <Block flex>
              <Block flex style={{ padding: theme.SIZES.BASE }}>
                <Text h5>Cards</Text>
              </Block>
              <Block flex space="between" style={styles.cards}>
                <Card
                  flex
                  borderless
                  shadowColor={theme.COLORS.BLACK}
                  style={styles.card}
                  title="Christopher Moon"
                  caption="139 minutes ago"
                  location="Los Angeles, CA"
                  avatar="http://i.pravatar.cc/100?id=pineaple"
                  imageBlockStyle={styles.cardNoRadius}
                  image="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300"
                />

                <Card
                  flex
                  borderless
                  shadowColor={theme.COLORS.BLACK}
                  style={styles.card}
                  title="Christopher Moon"
                  caption="139 minutes ago"
                  location="Los Angeles, CA"
                  avatar="http://i.pravatar.cc/100?id=skater"
                  imageStyle={styles.cardImageRadius}
                  imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                  image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
                />

                <Card
                  flex
                  borderless
                  shadowColor={theme.COLORS.BLACK}
                  style={styles.card}
                  title="Christopher Moon"
                  titleColor={theme.COLORS.WHITE}
                  caption="139 minutes ago"
                  avatar="http://i.pravatar.cc/100?id=skater"
                  footerStyle={styles.cardFull}
                  imageStyle={{ height: theme.SIZES.BASE * 13.75 }}
                  image="https://images.unsplash.com/photo-1506321806993-0e39f809ae59?&w=1200&h=1200&fit=crop&crop=entropy&q=300"
                >
                  <LinearGradient colors={['transparent', 'rgba(0,0,0, 0.8)']} style={styles.cardGradient} />
                </Card>
                <Block flex style={{ width: '100%' }}>
                  <Block flex style={{ padding: theme.SIZES.BASE }}>
                    <Text h5>Sliders</Text>
                  </Block>
                  <Slider
                    trackStyle={styles.slider}
                    step={1}
                    minimumValue={0}
                    maximumValue={71}
                  />
                  <Slider
                    trackStyle={styles.slider}
                    step={1}
                    thumbStyle={{ borderColor: '#fe2272' }}
                    activeColor="#fe2272"
                    minimumValue={0}
                    maximumValue={71}
                  />
                  <Slider
                    trackStyle={styles.slider}
                    step={1}
                    thumbStyle={{ borderColor: '#46df31' }}
                    activeColor="#46df31"
                    minimumValue={0}
                    maximumValue={71}
                  />
                  <Block />
                  <Block flex>
                    <Block flex style={{ padding: theme.SIZES.BASE }}>
                      <Text h5>Radio</Text>
                    </Block>

                    <Radio
                      containerStyle={styles.radio}
                      label="Galio"
                    />
                    <Radio
                      containerStyle={styles.radio}
                      color="#fe2472"
                      label="is"
                    />
                    <Radio
                      containerStyle={styles.radio}
                      color="#45df32"
                      label="awesome!"
                    />
                  </Block>
                  {/* color on checkboxStyle prop is not working */}
                  <Block flex>
                    <Block flex style={{ padding: theme.SIZES.BASE }}>
                      <Text h5>Checkbox</Text>
                    </Block>
                    <Checkbox
                      style={styles.checkbox}
                      label="Galio"
                      checkboxStyle={{
                        width: 25,
                        height: 25,
                      }}
                    />
                    <Checkbox
                      style={styles.checkbox}
                      label="is"
                      checkboxStyle={{
                        borderColor: '#fe2472',
                        width: 25,
                        height: 25,
                      }}
                    />
                    <Checkbox
                      style={styles.checkbox}
                      label="awesome!"
                      checkboxStyle={{
                        borderColor: '#45df32',
                        width: 25,
                        height: 25,
                      }}
                    />
                  </Block>
                  {/* color & trackColor is not working.. */}
                  <Block felx style={{ padding: theme.SIZES.BASE }}>
                    <Block flex style={styles.switch}>
                      <Text h5>Switch</Text>
                    </Block>
                    <Switch
                      style={styles.switch}
                      color="black"
                      trackColor={{
                        false: 'grey',
                        true: 'red',
                      }}
                    />
                    <Switch
                      style={styles.switch}
                      color="black"
                    />
                    <Switch
                      style={styles.switch}
                      color="black"
                    />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    justifyContent: 'flex-start',
    backgroundColor: theme.COLORS.WHITE,
  },
  button: {
    marginBottom: 20,
  },
  cards: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    borderWidth: 0,
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
  },
  cardFooter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: theme.SIZES.BASE / 2,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE / 2,
    backgroundColor: theme.COLORS.TRANSPARENT,
  },
  cardNoRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardAvatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  cardTitle: {
    justifyContent: 'center',
    paddingLeft: theme.SIZES.BASE / 2,
  },
  cardImageContainer: {
    borderWidth: 0,
    overflow: 'hidden',
  },
  cardImageRadius: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  cardImage: {
    width: 'auto',
    height: theme.SIZES.BASE * 12.5,
  },
  cardRounded: {
    borderRadius: theme.SIZES.BASE * 0.5,
  },
  cardFull: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  cardGradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
  slider: {
    marginTop: 10,
    marginBottom: 10,
  },
  radio: {
    marginTop: 10,
    marginBottom: 10,
  },
  checkbox: {
    marginTop: 10,
    marginBottom: 10,
  },
  switch: {
    marginTop: 10,
    marginBottom: 10,
  },
});
