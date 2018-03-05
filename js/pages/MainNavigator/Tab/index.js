import { TabNavigator } from 'react-navigation';

import UI from 'UI';
import PageMain from './PageMain';
import PageSetting from './PageSetting';

const TabNavigator1 = TabNavigator(
  {
    main: { screen: PageMain },
    setting: { screen: PageSetting },
  },
  {
    initialRouteName: 'main',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      style: {
        backgroundColor: UI.color.bgWhite,
        height: 50,
      },
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      labelStyle: {
        marginTop: 2,
        fontSize: 10,
        width: UI.size.deviceWidth / 2,
      },
      tabStyle: {
        marginTop: 5,
        height: 50,
      },
      iconStyle: {
        height: 25,
        width: 25,
      },
    },
  },
);

module.exports = {
  TabNavigator1,
};
