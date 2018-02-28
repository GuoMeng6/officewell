import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import R from 'ramda';
import actions from 'redux-app-config';

@connect(R.pick(['userInfo', 'bleStatus', 'peskInfo']), actions)
class PageMain extends Component {
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{ fontSize: 30, fontWeight: 'bold' }}
          onPress={() => {
            this.props.navigation.navigate('scan');
          }}
        >
          {status}
        </Text>
        {}
      </View>
    );
  }
}

export default PageMain;
