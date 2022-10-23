// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Lesson_02_FlatList from './src/home/Lesson_02_FlatList';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lesson2" component={Lesson_02_FlatList} />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="Lesson2" component={Lesson_02_FlatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
