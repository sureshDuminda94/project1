import React, {useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const jsonObject = {
  name: 'suresh',
  car: ['er', 'mx'],
};

const dataStruct = () => {
  useEffect(() => {
    console.log('sampleJSON', jsonObject);
    console.log('sampleJSON', jsonObject.car[1]);
  }, []);
};

export default dataStruct;
