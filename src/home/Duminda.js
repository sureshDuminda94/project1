import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

class Duminda extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.Comtainer}>
        <Text>Suresh</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

  Comtainer: {
    flex: 1,
    padding: 40,
    backgroundColor: 'yellow',


    },  

}); 

export default Duminda;


