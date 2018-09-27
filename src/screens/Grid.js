import React from 'react';
import {
  StyleSheet, ScrollView,
} from 'react-native';
import { Constants } from 'expo';

// galio components
import {
  Button, Icon, Block, Typography,
} from '..';

const BASE_SIZE = 14;
const COLOR_WHITE = '#FFFFFF';

class Grid extends React.Component {

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView contentContainerStyle={styles.grid}>
        <Block flex space="around">
          <Block row space="evenly">
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="social-facebook" family="Foundation" size={BASE_SIZE * 3} />
                  <Typography>Facebook</Typography>
                </Block>
              </Button>
            </Block>
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="social-github" family="Foundation" size={BASE_SIZE * 3} />
                  <Typography>GitHub</Typography>
                </Block>
              </Button>
            </Block>
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="social-instagram" family="Foundation" size={BASE_SIZE * 3} />
                  <Typography>Instagram</Typography>
                </Block>
              </Button>
            </Block>
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="social-windows" family="Foundation" size={BASE_SIZE * 3} />
                  <Typography>Windows</Typography>
                </Block>
              </Button>
            </Block>
          </Block>
          <Block row space="evenly">
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="social-facebook" family="SimpleLineIcons" size={BASE_SIZE * 3} />
                  <Typography>Facebook</Typography>
                </Block>
              </Button>
            </Block>
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="social-github" family="SimpleLineIcons" size={BASE_SIZE * 3} />
                  <Typography>GitHub</Typography>
                </Block>
              </Button>
            </Block>
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="social-instagram" family="SimpleLineIcons" size={BASE_SIZE * 3} />
                  <Typography>Instagram</Typography>
                </Block>
              </Button>
            </Block>
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="social-tumblr" family="SimpleLineIcons" size={BASE_SIZE * 3} />
                  <Typography>Tumblr</Typography>
                </Block>
              </Button>
            </Block>
          </Block>
          <Block row space="evenly">
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="social-android" family="Foundation" size={BASE_SIZE * 3} />
                  <Typography>Android</Typography>
                </Block>
              </Button>
            </Block>
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="social-apple" family="Foundation" size={BASE_SIZE * 3} />
                  <Typography>Apple</Typography>
                </Block>
              </Button>
            </Block>
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="social-digg" family="Foundation" size={BASE_SIZE * 3} />
                  <Typography>Digg</Typography>
                </Block>
              </Button>
            </Block>
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="social-dribbble" family="Foundation" size={BASE_SIZE * 3} />
                  <Typography>Dribbble</Typography>
                </Block>
              </Button>
            </Block>
          </Block>
          <Block row space="evenly">
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="500px" family="Entypo" size={BASE_SIZE * 3} />
                  <Typography>500px</Typography>
                </Block>
              </Button>
            </Block>
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="app-store" family="Entypo" size={BASE_SIZE * 3} />
                  <Typography>App Store</Typography>
                </Block>
              </Button>
            </Block>
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="baidu" family="Entypo" size={BASE_SIZE * 3} />
                  <Typography>Baidu</Typography>
                </Block>
              </Button>
            </Block>
            <Block card shadow middle style={styles.block}>
              <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                <Block flex middle>
                  <Icon name="behance" family="Entypo" size={BASE_SIZE * 3} />
                  <Typography>Behance</Typography>
                </Block>
              </Button>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  block: {
    paddingHorizontal: BASE_SIZE,
    paddingVertical: BASE_SIZE * 2,
    backgroundColor: COLOR_WHITE,
  },
  button: {
    width: 'auto',
    height: BASE_SIZE * 3,
    borderWidth: 0,
  },
});

export default Grid;
