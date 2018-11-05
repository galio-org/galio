import React from 'react';
import {
  Alert, Dimensions, StyleSheet, Platform, Image, ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo';

// galio component
import {
  Block, Button, NavBar, Text, Icon,
} from 'galio-framework';
import theme from '../theme';

const { height, width } = Dimensions.get('window');

const friends = [
  {
    id: 0,
    image: 'https://randomuser.me/api/portraits/men/27.jpg',
    name: 'Christopher',
  },
  {
    id: 1,
    image: 'https://randomuser.me/api/portraits/women/60.jpg',
    name: 'Sam',
  },
  {
    id: 2,
    image: 'https://randomuser.me/api/portraits/women/84.jpg',
    name: 'Sally',
  },
  {
    id: 3,
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    name: 'Steven',
  },
];
const photos = [
  {
    id: 0,
    image: 'https://picsum.photos/200/300?image=0',
  },
  {
    id: 1,
    image: 'https://picsum.photos/200/300?image=1',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300?image=2',
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/300?image=3',
  },
];

class Profile extends React.Component {
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { navigation } = this.props;
    return (
      <Block flex style={{ backgroundColor: 'white' }}>
        <Block flex={2}>
          <LinearGradient colors={['#F4F6F6', '#E9EDEE']} style={{ flex: 1 }}>
            <NavBar
              title="Profile"
              transparent
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
            <Block
              flex
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1001,
                marginBottom: 50,
              }}
            >
              <Text h3 color="#3423A6" bold style={{ marginBottom: 10 }}>
                Michael Brown
              </Text>
              <Text h5 bold muted style={{ marginBottom: 10 }}>
                User Experience Designer
              </Text>
              <Block row style={{ marginBottom: 25 }}>
                <Icon name="pin-3" family="Galio" size={18} color="#3423A6" />
                <Text p muted style={{ marginLeft: 8 }}>
                  Los Angeles,CA
                </Text>
              </Block>
            </Block>
          </LinearGradient>
        </Block>
        <Block flex={3}>
          <Block center>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/58.jpg' }}
              style={styles.image}
            />
          </Block>
          <Block row space="around" style={{ marginBottom: 20 }}>
            <Block center>
              <Text h5 bold>
                768
              </Text>
              <Text p muted>
                Photos
              </Text>
            </Block>
            <Block center>
              <Text h5 bold>
                43 K
              </Text>
              <Text p muted>
                Followers
              </Text>
            </Block>
            <Block center>
              <Text h5 bold>
                231
              </Text>
              <Text p muted>
                Articles
              </Text>
            </Block>
          </Block>
          <ScrollView
            contentContainerStyle={{ backgroundColor: 'white' }}
            showsVerticalScrollIndicator={false}
          >
            <Block
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 15,
                paddingRight: 15,
                borderTopColor: '#E9F1F7',
                borderTopWidth: 1,
              }}
            >
              <Block>
                <Text>Common Friends</Text>
              </Block>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginTop: 10 }}
              >
                {friends.map((friend) => {
                  const { name, image } = friend;
                  return (
                    <Block center style={{ marginRight: 15 }}>
                      <Image source={{ uri: image }} style={styles.avatar} />
                      <Text p muted>
                        {name}
                      </Text>
                    </Block>
                  );
                })}
              </ScrollView>
            </Block>
            <Block
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 15,
                paddingRight: 15,
                borderTopColor: '#E9F1F7',
                borderTopWidth: 1,
              }}
            >
              <Block row space="between" style={{ marginBottom: 10 }}>
                <Text h4 bold>
                  Photos
                </Text>
                <Text p muted>
                  View All
                </Text>
              </Block>

              <Block row style={{ flexWrap: 'wrap' }}>
                {photos.map((photo) => {
                  const { image } = photo;
                  return (
                    <Block style={{ marginRight: 15, marginBottom: 15 }}>
                      <Image source={{ uri: image }} style={styles.photos} />
                    </Block>
                  );
                })}
              </Block>
            </Block>
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    top: -25,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginBottom: 5,
  },
  photos: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
});

export default Profile;
