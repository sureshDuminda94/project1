import React, {useEffect} from 'react';
import {reaView, Text, StyleSheet, View, Button, TextInput} from 'react-native';

const jsonObject = {
  name: 'suresh',
  car: ['er', 'mx'],
};

const dataStruct = () => {
  useEffect(() => {
    console.log('sampleJSON', jsonObject);
    console.log('sampleJSON', jsonObject.car[1]);
  }, []);

  return (
    <View style={style.contain}>
      <View style={{margin: 26, borderWidth: 2, borderColor: 'blue'}}>
        <Text>full stack</Text>
      </View>
      <Text> text duminda</Text>
      <Button title="set me" />
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default dataStruct;
