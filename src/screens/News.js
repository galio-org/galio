import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
// Galio components
import { Typography, AuthorSection, Navbar } from '../';

const News = props => (
  <View style={{ flex: 1 }}>
    <Navbar title="News" buttonFunction={() => props.navigation.goBack()}/>
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          alignSelf: 'center',
          marginTop: 5,
          paddingBottom: 5,
          width: '93.5%',
        }}
      >
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1536523552737-74ded3c0591c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c93e90e0868aa428ec388db1ce633272&auto=format&fit=crop&w=1351&q=80',
          }}
          style={styles.articleThumbnail}
        />
        <View style={styles.article}>
          <Typography h2>
            What's going on with this little Cactus? Is he going crazy?
          </Typography>
          <Typography h5 muted style={{ marginTop: 10 }}>
            A chat with a little Cactus.
          </Typography>
          <Typography h4 bold style={{ marginTop: 20 }}>
            You should totally read this stuff, like seriously all yo homies
            love sneak dissing but at least u're true, right?
          </Typography>
          <Typography h5 style={{ marginTop: 13 }}>
            Spicy jalapeno bacon ipsum dolor amet short loin cupidatat est, pork
            pancetta velit kevin occaecat ipsum aliqua ham tri-tip incididunt.
          </Typography>
          <Typography h5 style={{ marginTop: 7 }}>
            Irure sirloin nostrud filet mignon capicola strip steak, sint pork
            dolore pig short ribs. Et pariatur sunt, ribeye esse frankfurter
            biltong nostrud. Elit do filet mignon turkey, tempor pastrami ea
            bacon. In tri-tip id cupim tail ham irure. Drumstick esse ut
            andouille strip steak.
          </Typography>
        </View>
      </View>
    </ScrollView>
    <AuthorSection
      fixed
      imageSource='https://api.adorable.io/avatars/100/raul@not-so-adorable.io.png'
      title='Young Einstein'
      subTitle='420 minutes ago'
      
    />
    
  </View>
);

const styles = StyleSheet.create({
  articleThumbnail: {
    borderRadius: 5,
    width: '100%',
    height: 220,
  },
  article: {
    marginTop: 20,
  },
});

export default News;
