import React from 'react';
import { Dimensions, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo';

// galio components
import { Text, Block, Button, Card, NavBar, Icon, Input } from '..';
import theme from '../theme';

const { width } = Dimensions.get('screen');

export default class Components extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block flex>
        <NavBar
          transparent
          title="Galio components"
          right={(
            <Button
              onlyIcon
              icon="heart"
              iconSize={18}
              iconFamily="FontAwesome"
              iconColor={theme.COLORS.MUTED}
              color="transparent"
              onPress={() => Alert.alert('Like it!')}
            />
          )}
          onLeftPress={() => navigation.openDrawer()}
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
                <Input rounded icon="email" family="MaterialIcons" placeholder="icon right" right />
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
                  title="Chat"
                  leftStyle={{ marginRight: 0 }}
                  rightStyle={{ alignSelf: 'flex-end' }}
                  onLeftPress={() => Alert.alert('Back')}
                  style={{ width, marginHorizontal: -theme.SIZES.BASE }}
                  right={(
                    <Button
                      onlyIcon
                      icon="settings"
                      color="transparent"
                      iconFamily="Feather"
                      iconColor={theme.COLORS.MUTED}
                      iconSize={theme.SIZES.BASE * 1.5}
                      onPress={() => Alert.alert('Settings')}
                    />
                  )}
                />

                <NavBar
                  title="Feed"
                  titleStyle={{ alignSelf: 'flex-start' }}
                  onLeftPress={() => Alert.alert('Menu')}
                  rightStyle={{ flexDirection: 'row' }}
                  leftStyle={{ flex: 0.5 }}
                  style={{ width, marginHorizontal: -theme.SIZES.BASE }}
                  right={[
                    <Button
                      key="right-heart"
                      onlyIcon
                      icon="md-heart-outline"
                      iconFamily="Ionicons"
                      color="transparent"
                      iconColor={theme.COLORS.MUTED}
                      iconSize={theme.SIZES.BASE * 1.5}
                      onPress={() => Alert.alert('Like!')}
                    />,
                    <Button
                      key="right-search"
                      onlyIcon
                      icon="ios-search"
                      color="transparent"
                      iconFamily="Ionicons"
                      iconColor={theme.COLORS.MUTED}
                      iconSize={theme.SIZES.BASE * 1.5}
                      onPress={() => Alert.alert('Search')}
                    />,
                  ]}
                />

                <NavBar
                  back
                  title="Terms of Services"
                  leftStyle={{ flex: 0.5 }}
                  onLeftPress={() => Alert.alert('Back')}
                  titleStyle={{ alignSelf: 'flex-start' }}
                  style={{ width, marginHorizontal: -theme.SIZES.BASE }}
                  right={[
                    <Button
                      key="right-location"
                      onlyIcon
                      icon="location"
                      iconFamily="EvilIcons"
                      color="transparent"
                      iconColor={theme.COLORS.MUTED}
                      iconSize={theme.SIZES.BASE * 1.5}
                      onPress={() => Alert.alert('Like!')}
                    />,
                    <Button
                      key="right-search"
                      onlyIcon
                      icon="ios-search"
                      color="transparent"
                      iconFamily="Ionicons"
                      iconColor={theme.COLORS.MUTED}
                      iconSize={theme.SIZES.BASE * 1.5}
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
                      icon="ios-search"
                      color="transparent"
                      iconFamily="Ionicons"
                      iconColor={theme.COLORS.WHITE}
                      iconSize={theme.SIZES.BASE * 1.5}
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
                  image="https://images.unsplash.com/photo-1524562787295-1608217aa823?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4bae0aef9eca31f164025ae3ebe6fb24&auto=format&fit=crop&w=1327&q=80"
                  authorImageSrc="http://i.pravatar.cc/100"
                  authorTitle="Alin Talent"
                  authorSubTitle="16 minutes ago"
                  rightSideComponent={(
                    <Block flex row middle space="around">
                      <Block row middle>
                        <Icon name="eye" family="MaterialCommunityIcons" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
                        <Text p muted style={{ marginLeft: theme.SIZES.BASE * 0.25 }}>25.6k</Text>
                      </Block>
                      <Block row middle>
                        <Icon name="heart-outline" family="MaterialCommunityIcons" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
                        <Text p muted style={{ marginLeft: theme.SIZES.BASE * 0.25 }}>936</Text>
                      </Block>
                    </Block>
                  )}
                />
                <Card
                  neutral
                  fullBackgroundImage
                  image="https://images.unsplash.com/photo-1535649168324-4198731b2252?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=461ccd152d44ae618d6de5f3fe5cb7d2&auto=format&fit=crop&w=2375&q=80"
                  authorImageSrc="http://i.pravatar.cc/100"
                  authorTitle="Alin cu y"
                  authorSubTitle="420 minutes ago"
                />

                <Card flex borderless shadowColor={theme.COLORS.BLACK} style={styles.card}>
                  <Block card style={[styles.cardImageContainer, styles.cardNoRadius]}>
                    <Image
                      source={{ uri: 'https://images.unsplash.com/photo-1524562787295-1608217aa823?w=600&q=200' }}
                      style={styles.cardImage}
                    />
                  </Block>
                  <Block flex row style={styles.cardFooter} space="around">
                    <Block flex={1.2} row>
                      <Image source={{ uri: 'http://i.pravatar.cc/100?id=card' }} style={styles.cardAvatar} />
                      <Block style={styles.cardTitle}>
                        <Text>Galio Framework</Text>
                        <Text muted size={theme.SIZES.FONT * 0.75}>components</Text>
                      </Block>
                    </Block>
                    <Block flex row middle space="around">
                      <Block row middle>
                        <Icon name="eye" family="MaterialCommunityIcons" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
                        <Text p muted style={{ marginLeft: theme.SIZES.BASE * 0.25 }}>25.6k</Text>
                      </Block>
                      <Block row middle>
                        <Icon name="heart-outline" family="MaterialCommunityIcons" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
                        <Text p muted style={{ marginLeft: theme.SIZES.BASE * 0.25 }}>936</Text>
                      </Block>
                    </Block>
                  </Block>
                </Card>

                <Card flex borderless shadowColor={theme.COLORS.BLACK} style={styles.card}>
                  <Block card style={styles.cardImageContainer}>
                    <Image
                      source={{ uri: 'https://images.unsplash.com/photo-1535649168324-4198731b2252?w=600&q=200' }}
                      style={styles.cardImage}
                    />
                  </Block>
                  <LinearGradient colors={['transparent', theme.COLORS.BLACK]} style={styles.cardGradient} />
                  <Block flex row style={[styles.cardFooter, styles.cardFull]} space="around">
                    <Block flex={1.2} row>
                      <Image source={{ uri: 'http://i.pravatar.cc/100?id=card' }} style={styles.cardAvatar} />
                      <Block style={styles.cardTitle}>
                        <Text color={theme.COLORS.WHITE}>Galio Framework</Text>
                        <Text color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.75}>components</Text>
                      </Block>
                    </Block>
                    <Block flex row middle space="around">
                      <Block row middle>
                        <Icon name="eye" family="MaterialCommunityIcons" color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.8} />
                        <Text p color={theme.COLORS.WHITE} style={{ marginLeft: theme.SIZES.BASE * 0.25 }}>25.6k</Text>
                      </Block>
                      <Block row middle>
                        <Icon name="heart-outline" family="MaterialCommunityIcons" color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.8} />
                        <Text p color={theme.COLORS.WHITE} style={{ marginLeft: theme.SIZES.BASE * 0.25 }}>936</Text>
                      </Block>
                    </Block>
                  </Block>
                </Card>
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
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
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
    width: theme.SIZES.BASE * 3,
    height: theme.SIZES.BASE * 3,
    borderRadius: theme.SIZES.BASE * 1.5,
  },
  cardTitle: {
    justifyContent: 'center',
    paddingLeft: theme.SIZES.BASE,
  },
  cardImageContainer: {
    borderWidth: 0,
    overflow: 'hidden',
  },
  cardImage: {
    height: theme.SIZES.BASE * 15,
    width: width - theme.SIZES.BASE * 2,
    borderTopRightRadius: theme.SIZES.BASE * 0.5,
    borderTopLeftRadius: theme.SIZES.BASE * 0.5,
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});
