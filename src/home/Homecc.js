import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './Homecc.styles';

class Homecc extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  onButtonPress() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.count}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.onButtonPress()}>
          <Text style={styles.btnTitle}>+ Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Homecc;
