import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Camera from 'react-native-camera';
import UI from 'UI';

class PageQRCode extends Component {
  _onBarCode(data) {
    console.log('======== onBarCode ======= ', data);
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
