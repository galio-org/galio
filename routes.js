import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
// screens
import Components from './src/screens/Components';
import ArticleFeed1 from './src/screens/ArticleFeedv1';
import ArticleFeed2 from './src/screens/ArticleFeedv2';
import News from './src/screens/News';
import Article from './src/screens/Article';
import ArticleCover from './src/screens/ArticleCover';

const ArticleFeed = createStackNavigator({
  ArticleCard: {screen: ArticleFeed1, navigationOptions: {
    header: null
  }},
  News: {screen: News, navigationOptions: { header: null }}, // bug de background
});

const GalioApp = createDrawerNavigator({
  Home: Components,
  ArticleFull: {
    screen: ArticleFeed,
    navigationOptions: { drawerLabel: 'Full Background Cards' },
  },
  ArticleHalf: {
    screen: ArticleFeed2,
    navigationOptions: { drawerLabel: 'Normal Cards' },
  },
  News: {
    screen: News,
    navigationOptions: { drawerLabel: 'News Screen' },
  },
  ArticleCover: {
    screen: ArticleCover,
    navigationOptions: { drawerLabel: 'Article Cover' }
  },
  Article: {
    screen: Article,
    navigationOptions: { drawerLabel: 'Article Screen' }
  }
});


export default GalioApp;
