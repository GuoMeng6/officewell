import { StackNavigator } from 'react-navigation';

import { TabNavigator1 } from './Tab';

export default StackNavigator(
  {
    tab1: { screen: TabNavigator1 },
  },
  {
    initialRouteName: 'tab1',
    headerMode: 'none',
  },
);
