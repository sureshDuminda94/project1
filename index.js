/**
 * @format
 */

import {AppRegistry} from 'react-native';
import FlexTime from './src/home/FlexTime';
import {name as appName} from './app.json';
import dataStruct from './src/home/dataStruct';

AppRegistry.registerComponent(appName, () => dataStruct);
