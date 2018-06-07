// import library to help create a component
import React, { Text } from 'react';
import ReactNative from 'react-native';

// create a component
const App = () => {
  return <Text>Some Text</Text>;
};

// render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);
