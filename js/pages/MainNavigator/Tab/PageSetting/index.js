import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { connect } from 'react-redux';
import R from 'ramda';
import actions from 'redux-app-config';
import UI from 'UI';

const selectedImg = require('../img/settingSelected.png');
const noSelectedImg = require('../img/settingNoSelected.png');

@connect(R.pick(['userInfo', 'bleStatus', 'peskInfo']), actions)
class PageSetting extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#0f0',
      height: 0,
    },
    title: '设置',
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0,
      fontSize: 20,
      color: UI.color.textBlack,
      fontWeight: 'normal',
      alignSelf: 'center',
    },
    tabBarLabel: '设置',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? selectedImg : noSelectedImg} />
    ),
  });

  componentWillMount() {}

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#0ff',
        }}
      >
        <View
          style={{
            backgroundColor: '#0f0',
            height: 44,
            width: UI.size.deviceWidth,
          }}
        />
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>设置</Text>
      </View>
    );
  }
}

export default PageSetting;
