import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Camera from 'react-native-camera';
import UI from 'UI';

class PageQRCode extends Component {
  _onBarCode(data) {
    console.log('======= _onBarCode ====== ', data);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Camera
          style={styles.cameraStyle}
          captureAudio={false}
          onBarCodeRead={this._onBarCode.bind(this)}
          onFocusChanged={() => {}}
          onZoomChanged={() => {}}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 40,
            left: 24,
            paddingHorizonal: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <Text>返回</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cameraStyle: {
    position: 'absolute',
    width: UI.size.deviceWidth,
    height: UI.size.deviceHeight,
    backgroundColor: UI.color.black,
  },
});

export default PageQRCode;
