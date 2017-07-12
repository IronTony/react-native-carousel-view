/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-carousel-view';

export default class example extends Component {
  render() {
    return (
      <View>
        <Carousel width={375}>
          <View style={styles.container}>
            <Text>Page 1</Text>
          </View>
          <View style={styles.container}>
            <Text>Page 2</Text>
          </View>
          <View style={styles.container}>
            <Text>Page 3</Text>
          </View>
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    minHeight: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

AppRegistry.registerComponent('example', () => example);
