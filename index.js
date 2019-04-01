/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Route from './Route'
// import AppStart from './components/stacknavigator/AppStart';
import AppStart from './components/stacknavigator/StackNavigator';
// AppRegistry.registerComponent(appName, () => Route);
AppRegistry.registerComponent(appName, () => AppStart);
