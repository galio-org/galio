import React from 'react';
import { StyleSheet, View, ScrollView, Alert, Dimensions } from 'react-native';

// galio components
import { Text, Block, Button, Card, NavBar, Icon, Input } from '..';
import theme from '../theme';

const { width } = Dimensions.get('window');

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

        <ScrollView style={{ flex: 1 }}>
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
                <Text h1>Heading 1</Text>
                <Text h2>Heading 2</Text>
                <Text h3>Heading 3</Text>
                <Text h4>Heading 4</Text>
                <Text h5>Heading 5</Text>
                <Text p>Paragraph</Text>
                <Text p muted>
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
                  rightStyle={{ alignSelf: 'flex-end' }}
                  onLeftPress={() => Alert.alert('Back')}
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
                  // rightStyle={{ alignItems: 'flex-end' }}
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
                  style={{ backgroundColor: theme.COLORS.THEME }}
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
              <Block flex middle>
                <Card
                  image="https://images.unsplash.com/photo-1524562787295-1608217aa823?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4bae0aef9eca31f164025ae3ebe6fb24&auto=format&fit=crop&w=1327&q=80"
                  authorImageSrc="http://i.pravatar.cc/100"
                  authorTitle="Alin Talent"
                  authorSubTitle="16 minutes ago"
                  rightSideComponent={(
                    <View>
                      <Text p muted>
                        Salut, eu sunt Mircea si imi place sa mananc ciuperci.
                      </Text>
                    </View>
                  )}
                />
                <Card
                  fullBackgroundImage
                  image="https://images.unsplash.com/photo-1535649168324-4198731b2252?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=461ccd152d44ae618d6de5f3fe5cb7d2&auto=format&fit=crop&w=2375&q=80"
                  authorImageSrc="http://i.pravatar.cc/100"
                  authorTitle="Alin cu y"
                  authorSubTitle="420 minutes ago"
                />
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
});
