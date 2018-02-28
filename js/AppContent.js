import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ble from 'ble';
import AppNavigator from './pages';

class AppContent extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default AppContent;
