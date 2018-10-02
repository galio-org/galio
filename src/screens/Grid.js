import React from 'react';
import {
  Dimensions, StyleSheet,
} from 'react-native';
// galio components
import {
  Button, Icon, Block, Text, NavBar,
} from '..';
import theme from '../theme';

const { width } = Dimensions.get('screen');
const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;

class Grid extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block style={styles.grid}>
        <NavBar title="Grid" onLeftPress={() => navigation.openDrawer()} />
        <Block row space="evenly">
          <Block shadow middle style={styles.block}>
            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
              <Block flex middle>
                <Icon name="social-facebook" family="Foundation" size={BASE_SIZE * 2.5} />
                <Text size={BASE_SIZE * 0.8}>Facebook</Text>
              </Block>
            </Button>
          </Block>
          <Block shadow middle style={styles.block}>
            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
              <Block flex middle>
                <Icon name="social-github" family="Foundation" size={BASE_SIZE * 2.5} />
                <Text size={BASE_SIZE * 0.8}>GitHub</Text>
              </Block>
            </Button>
          </Block>
          <Block shadow middle style={styles.block}>
            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
              <Block flex middle>
                <Icon name="social-instagram" family="Foundation" size={BASE_SIZE * 2.5} />
                <Text size={BASE_SIZE * 0.8}>Instagram</Text>
              </Block>
            </Button>
          </Block>
        </Block>
        <Block row space="evenly">
          <Block shadow middle style={styles.block}>
            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
              <Block flex middle>
                <Icon name="social-facebook" family="SimpleLineIcons" size={BASE_SIZE * 2.5} />
                <Text size={BASE_SIZE * 0.8}>Facebook</Text>
              </Block>
            </Button>
          </Block>
          <Block shadow middle style={styles.block}>
            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
              <Block flex middle>
                <Icon name="social-github" family="SimpleLineIcons" size={BASE_SIZE * 2.5} />
                <Text size={BASE_SIZE * 0.8}>GitHub</Text>
              </Block>
            </Button>
          </Block>
          <Block shadow middle style={styles.block}>
            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
              <Block flex middle>
                <Icon name="social-instagram" family="SimpleLineIcons" size={BASE_SIZE * 2.5} />
                <Text size={BASE_SIZE * 0.8}>Instagram</Text>
              </Block>
            </Button>
          </Block>
        </Block>
        <Block row space="evenly">
          <Block shadow middle style={styles.block}>
            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
              <Block flex middle>
                <Icon name="social-android" family="Foundation" size={BASE_SIZE * 2.5} />
                <Text size={BASE_SIZE * 0.8}>Android</Text>
              </Block>
            </Button>
          </Block>
          <Block shadow middle style={styles.block}>
            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
              <Block flex middle>
                <Icon name="social-apple" family="Foundation" size={BASE_SIZE * 2.5} />
                <Text size={BASE_SIZE * 0.8}>Apple</Text>
              </Block>
            </Button>
          </Block>
          <Block shadow middle style={styles.block}>
            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
              <Block flex middle>
                <Icon name="social-digg" family="Foundation" size={BASE_SIZE * 2.5} />
                <Text size={BASE_SIZE * 0.8}>Digg</Text>
              </Block>
            </Button>
          </Block>
        </Block>
        <Block row space="evenly">
          <Block shadow middle style={styles.block}>
            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
              <Block flex middle>
                <Icon name="500px" family="Entypo" size={BASE_SIZE * 2.5} />
                <Text size={BASE_SIZE * 0.8}>500px</Text>
              </Block>
            </Button>
          </Block>
          <Block shadow middle style={styles.block}>
            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
              <Block flex middle>
                <Icon name="app-store" family="Entypo" size={BASE_SIZE * 2.5} />
                <Text size={BASE_SIZE * 0.8}>App Store</Text>
              </Block>
            </Button>
          </Block>
          <Block shadow middle style={styles.block}>
            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
              <Block flex middle>
                <Icon name="baidu" family="Entypo" size={BASE_SIZE * 2.5} />
                <Text size={BASE_SIZE * 0.8}>Baidu</Text>
              </Block>
            </Button>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  block: {
    padding: BASE_SIZE,
    backgroundColor: COLOR_WHITE,
    borderRadius: BASE_SIZE / 2,
    height: width * 0.28,
    width: width * 0.28,
  },
  button: {
    width: 'auto',
    height: 'auto',
  },
});

export default Grid;
