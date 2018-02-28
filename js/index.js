/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { onLoadRedux, store } from 'redux-app-config';
import AppContent from './AppContent';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    onLoadRedux(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <Provider store={store}>
        <AppContent />
      </Provider>
    );
  }
}
