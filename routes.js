import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
// screens
import Article from './src/screens/Article';
import ArticleCover from './src/screens/ArticleCover';
import ArticleFeed1 from './src/screens/ArticleFeedv1';
import ArticleFeed2 from './src/screens/ArticleFeedv2';
import Components from './src/screens/Components';
import News from './src/screens/News';
import Presentation from './src/screens/Presentation';

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
  Article: {
    screen: Article,
    navigationOptions: { drawerLabel: 'Article Screen' }
  },
  ArticleCover: {
    screen: ArticleCover,
    navigationOptions: { drawerLabel: 'Article Cover' }
  },
  News: {
    screen: News,
    navigationOptions: { drawerLabel: 'News Screen' },
  },
  Presentation: {
    screen: Presentation,
    navigationOptions: { drawerLabel: 'Presentation Screen' }
  }
});


export default GalioApp;
