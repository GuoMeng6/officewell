import {
  StackNavigator,
  addNavigationHelpers,
  NavigationActions,
} from 'react-navigation';
import { Easing, Animated } from 'react-native';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import PageMain from './PageMain';
import PageQRCode from './PageQRCode';

const TransitionConfiguration = () => ({
  screenInterpolator: sceneProps => {
    const { scene } = sceneProps;
    const { route } = scene;
    const params = route.params || {};
    const transition = params.transition || 'forHorizontal';
    return CardStackStyleInterpolator[transition](sceneProps);
  },
  transitionSpec: {
    duration: 300,
    easing: Easing.linear,
    timing: Animated.timing,
  },
});

const routeParams = {
  initialRouteName: 'main',
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: TransitionConfiguration,
};

const AppNavigator = StackNavigator(
  {
    main: { screen: PageMain },
    scan: { screen: PageQRCode },
  },
  routeParams,
);

export default AppNavigator;
