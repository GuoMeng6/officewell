import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { connect } from 'react-redux';
import R from 'ramda';
import actions from 'redux-app-config';
import ble from 'ble';
import UI from 'UI';

const selectedImg = require('../img/peskSelected.png');
const noSelectedImg = require('../img/peskNoSelected.png');

@connect(R.pick(['userInfo', 'bleStatus', 'peskInfo']), actions)
class PageMain extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: UI.color.white,
      height: UI.size.statusBarHeight + UI.size.navBarHeight,
    },
    title: '控制',
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0,
      fontSize: 20,
      color: UI.color.textBlack,
      fontWeight: 'normal',
      alignSelf: 'center',
    },
    tabBarLabel: '控制',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? selectedImg : noSelectedImg} />
    ),
  });

  componentWillMount() {}

  render() {
    console.log('========== ', this.props);
    const { bleStatus } = this.props;
    let status = '请打开蓝牙';
    switch (bleStatus.status) {
      case 'BLE_OFF':
        status = '请打开蓝牙';
        break;
      case 'BLE_ON':
        status = '连接';
        break;
      case 'BLE_CONNECTED':
        status = '连接成功';
        break;
      default:
        status = '正在连接...';
        break;
    }

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{ fontSize: 30, fontWeight: 'bold' }}
          onPress={() => {
            // if (bleStatus.status === 'BLE_ON') {
            // this.props.navigation.navigate('scan');
            ble.connect({ ssid: '7C:EC:79:ED:43:59', connId: 'FF12' });
            // }
          }}
        >
          {status}
        </Text>
        {bleStatus.status === 'BLE_CONNECTED' ? (
          <View
            style={{
              marginTop: 20,
              width: UI.size.deviceWidth,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <TouchableOpacity
              style={{
                height: 40,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
                borderWidth: 1,
                borderColor: '#000000',
              }}
              onPress={() => {
                ble.getPeskController().moveUp();
              }}
            >
              <Text>上升</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
                borderWidth: 1,
                borderColor: '#000000',
              }}
              onPress={() => {
                ble.getPeskController().moveStop();
              }}
            >
              <Text>停止</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
                borderWidth: 1,
                borderColor: '#000000',
              }}
              onPress={() => {
                ble.getPeskController().moveDown();
              }}
            >
              <Text>下降</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

export default PageMain;
