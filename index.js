/**
 * @format
 */

import {AppRegistry} from 'react-native';
import FlexTime from './src/home/FlexTime';
import {name as appName} from './app.json';
import dataStruct from './src/home/dataStruct';
import funtio from './src/home/funtio';
import Assignment from './src/home/Assignment';
import Lesson_02_FlatList from './src/home/Lesson_02_FlatList';

AppRegistry.registerComponent(appName, () => Lesson_02_FlatList);
