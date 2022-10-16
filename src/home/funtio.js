import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

const funtio = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="enter f_name" />
      <TextInput style={styles.input} placeholder="enter l_name" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default funtio;
