import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const Suresh = () => {
  return (
    <SafeAreaView style={styles.rContainer}>
      <Text style={styles.text}>suresh duminda</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
});

export default Suresh;
