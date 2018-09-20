import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
// galio components
import { Typography, Button, Card, Navbar } from '../../src';

export default class Components extends React.Component {
  onBurgerPress() {
    this.props.navigation.openDrawer();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navbar 
          buttonFunction={this.onBurgerPress.bind(this)}
          title="All components"
        />
        <ScrollView style={{ flex: 1 }}>
          <View
            style={[styles.container, { backgroundColor: 'rgb(255,255,255)' }]}
          >
            <Typography h1 style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
              Typography:
            </Typography>
            <Typography h1>Heading 1</Typography>
            <Typography h2>Heading 2</Typography>
            <Typography h3>Heading 3</Typography>
            <Typography h4>Heading 4</Typography>
            <Typography h5>Heading 5</Typography>
            <Typography p>Paragraph</Typography>
            <Typography p muted>
              This is a muted paragraph.
            </Typography>

            <Typography h1 style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
              Buttons:
            </Typography>
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
            <Button style={styles.marginBottomButton} color="success" round>Success</Button>
            <Button style={styles.marginBottomButton} color="theme" radius={14}>borderRadius 14</Button>
            <Button style={styles.marginBottomButton} uppercase>uppercase text</Button>
            <Button style={styles.marginBottomButton} lowercase>LOWERCASE TEXT</Button>
            <Button style={styles.marginBottomButton} capitalize>capitalize text</Button>

            <Typography h1 style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
              Cards:
            </Typography>
            <Card
              image="https://images.unsplash.com/photo-1524562787295-1608217aa823?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4bae0aef9eca31f164025ae3ebe6fb24&auto=format&fit=crop&w=1327&q=80"
              authorImageSrc="http://i.pravatar.cc/100"
              authorTitle="Alin Talent"
              authorSubTitle="16 minutes ago"
              rightSideComponent={
                <View>
                  <Typography p muted>
                    Salut, eu sunt Mircea si imi place sa mananc ciuperci.
                  </Typography>
                </View>
              }
            />
            <Card
              fullBackgroundImage
              image="https://images.unsplash.com/photo-1535649168324-4198731b2252?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=461ccd152d44ae618d6de5f3fe5cb7d2&auto=format&fit=crop&w=2375&q=80"
              authorImageSrc="http://i.pravatar.cc/100"
              authorTitle="Alin cu y"
              authorSubTitle="420 minutes ago"
            />

            <Typography h1 style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
              Navbars:
            </Typography>
            <Navbar
              title="Custom style"
              rightSideComponent={( <View style={{width: 20, height: 20, backgroundColor:'blue' }}></View> )}
              style={{ backgroundColor: 'cyan' }}
            />
            <Typography h5 muted>
              //TODO//:: , >Add icons to buttons, >Work on shadows, >Typography style prop warning, >Navbar component,
              >Location component, >SafeArea iPhone X, >Card height %*Dimension(??), >Padding for screen containers, >Find wtf is going on with the style prop
            </Typography>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  marginBottomButton: {
    marginBottom: 3,
  },
});
