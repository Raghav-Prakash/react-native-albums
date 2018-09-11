/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// Import library to create a component
import React from 'react';
import {View} from 'react-native';

// Import custom components from our component files
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create the App component that would contain all other components
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// Make the component available to register
export default App;