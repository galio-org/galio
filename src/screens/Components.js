import React from 'react';
import { StyleSheet, View, ScrollView, Alert, Dimensions } from 'react-native';

// galio components
import { Text, Button, Card, NavBar, Icon, Input } from '..';

const { width } = Dimensions.get('window');

export default class Components extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <NavBar
          transparent
          title="All components"
          right={(
            <Button
              onlyIcon
              icon="heart"
              iconFamily="FontAwesome"
              iconSize={18}
              color="transparent"
              onPress={() => Alert.alert('Like it!')}
            />
          )}
          onLeftPress={() => navigation.openDrawer()}
        />

        <ScrollView style={{ flex: 1 }}>
          <View
            style={[styles.container, { backgroundColor: 'rgb(255,255,255)' }]}
          >
            <Text h1 style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
              Typography:
            </Text>
            <Text h1>Heading 1</Text>
            <Text h2>Heading 2</Text>
            <Text h3>Heading 3</Text>
            <Text h4>Heading 4</Text>
            <Text h5>Heading 5</Text>
            <Text p>Paragraph</Text>
            <Text p muted>
              This is a muted paragraph.
            </Text>

            <Text h1 style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
              Buttons:
            </Text>
            <View
              style={[
                {
                  backgroundColor: 'rgba(250,34,123,0.1)',
                  width: '100%',
                  alignItems: 'center',
                },
                styles.marginBottomButton,
              ]}
            >
              <Button color="transparent">Transparent</Button>
            </View>
            <Button size="small" style={styles.marginBottomButton} round>
              Primary
            </Button>
            <Button
              color="theme"
              size="small"
              style={styles.marginBottomButton}
            >
              Theme
            </Button>
            <Button
              color="error"
              size="small"
              round
              style={styles.marginBottomButton}
            >
              Error
            </Button>
            <Button
              color="warning"
              size="small"
              style={styles.marginBottomButton}
            >
              Warning
            </Button>
            <Button style={styles.marginBottomButton} color="success" round>
              Success
            </Button>
            <Button style={styles.marginBottomButton} color="theme" radius={14}>
              borderRadius 14
            </Button>
            <Button style={styles.marginBottomButton} uppercase>
              uppercase text
            </Button>
            <Button style={styles.marginBottomButton} lowercase>
              LOWERCASE TEXT
            </Button>
            <Button style={styles.marginBottomButton} capitalize>
              capitalize text
            </Button>
            <Button style={styles.marginBottomButton} color="success">
              <Icon name="star" family="FontAwesome" />rating
            </Button>

            <Button
              style={styles.marginBottomButton}
              size={200}
              color="#3A3C39"
              round
            >
              <Icon size={24} color="orange" name="star" family="FontAwesome" />
              <Icon size={24} color="orange" name="star" family="FontAwesome" />
              <Icon size={24} color="orange" name="star" family="FontAwesome" />
              <Icon size={24} color="orange" name="star" family="FontAwesome" />
              <Icon
                size={24}
                color="orange"
                name="star-half-empty"
                family="FontAwesome"
              />
            </Button>
            <Button
              style={styles.marginBottomButton}
              onlyIcon
              icon="heart"
              iconFamily="FontAwesome"
              iconSize={24}
              color="transparent"
            />
            <Button style={styles.marginBottomButton} loading color="black" />

            <Text h1 style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
              Cards:
            </Text>
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

            <Text h1 style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
              NavBars:
            </Text>
            <NavBar
              title="Custom style"
              right={(
                <View
                  style={{ width: 20, height: 20, backgroundColor: 'blue' }}
                />
              )}
              style={{ backgroundColor: 'cyan' }}
            />
            <Text h1 style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
              Inputs:
            </Text>
            <View style={{ width: width * 0.8, alignSelf: 'center' }}>
              <Input
                type="phone-pad"
                placeholder="+40763023212"
                label="Phone Number"
                borderColor="#000"
                help="Your phone number"
                color="yellow"
                placeholderTextColor="green"
                icon="github"
                family="Entypo"
              />
              <Input
                type="numeric"
                password
                viewPass
                placeholder="2233"
                label="This is yo pin, yo"
                help="A pin should have 4 numbers"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 3,
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  marginBottomButton: {
    marginBottom: 3,
  },
});
