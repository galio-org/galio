import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
// screens
import Article from './src/screens/Article';
import ArticleCover from './src/screens/ArticleCover';
import ArticleFeed1 from './src/screens/ArticleFeedv1';
import ArticleFeed2 from './src/screens/ArticleFeedv2';
import Components from './src/screens/Components';
import Dashboard from './src/screens/Dashboard';
import Login from './src/screens/Login';
import News from './src/screens/News';
import Presentation from './src/screens/Presentation';
import Dashboard from './src/screens/Dashboard';
import Register from './src/screens/Register';

const ArticleFeed = createStackNavigator({
  ArticleCard: {
    screen: ArticleFeed1,
    navigationOptions: {
      header: null,
    },
  },
  News: { screen: News, navigationOptions: { header: null } }, // bug de background
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
    navigationOptions: { drawerLabel: 'Article Screen' },
  },
  ArticleCover: {
    screen: ArticleCover,
    navigationOptions: { drawerLabel: 'Article Cover' },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard screen',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: 'Login Screen',
    },
  },
  News: {
    screen: News,
    navigationOptions: { drawerLabel: 'News Screen' },
  },
  Presentation: {
    screen: Presentation,
    navigationOptions: { drawerLabel: 'Presentation Screen' }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      drawerLabel: 'Register Screen',
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: { drawerLabel: 'Dashboard Screen' }
  },
});

export default GalioApp;
