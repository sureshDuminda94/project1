import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import react from 'react';

class FlexTime extends react.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <Image style={styles.imageCreate} source={require('../home/1.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },

  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },

  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },

  imageCreate: {
    width: 150,
    height: 250,
  },
});

export default FlexTime;
