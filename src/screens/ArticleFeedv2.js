import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';

// Galio components
import { Navbar, Card, Typography } from '../';

export default class ArticleHalf extends React.Component {
  onBurgerPress() {
    this.props.navigation.openDrawer();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navbar
          buttonFunction={this.onBurgerPress.bind(this)}
          title="Article Feed v2"
        />
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Card
              image="https://images.unsplash.com/photo-1536523552737-74ded3c0591c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c93e90e0868aa428ec388db1ce633272&auto=format&fit=crop&w=1351&q=80"
              authorImageSrc="http://i.pravatar.cc/100"
              authorTitle="Alin Gheorghe"
              authorSubTitle="420 minutes ago"
              rightSideComponent={
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/location-pin-127-595049.png' }}
                    style={{ width: 15, height: 15 }}
                  />
                  <Typography p muted>Los Angeles, CA</Typography>
                </View>
              }
            />
            <Card
              image="https://images.unsplash.com/photo-1536396123481-991b5b636cbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01130bc0b065f8e937e2791bab41bb19&auto=format&fit=crop&w=1331&q=80"
              authorImageSrc="http://i.pravatar.cc/100"
              authorTitle="Einstein aka Young Physics"
              authorSubTitle="420 minutes ago"
            />
            <Card
              image="https://images.unsplash.com/photo-1536567929406-c818f28ec428?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63eb43251970c0f821631dbd2db30425&auto=format&fit=crop&w=1350&q=80"
              authorImageSrc="http://i.pravatar.cc/100"
              authorTitle="Lil' Pump"
              authorSubTitle="420 minutes ago"
              rightSideComponent={
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/location-pin-127-595049.png' }}
                    style={{ width: 15, height: 15, marginRight: 2 }}
                  />
                  <Typography p muted>Los Angeles, CA</Typography>
                </View>
              }
            />
            <Card
              image="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
              authorImageSrc="http://i.pravatar.cc/100"
              authorTitle="Kanye West"
              authorSubTitle="420 minutes ago"
            />
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
});
