/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Render exported components to screen
AppRegistry.registerComponent(appName, () => App);