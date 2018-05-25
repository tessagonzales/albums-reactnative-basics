import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/Main';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={ 'Albums' }/>

         <AlbumList />
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyling: {
    fontSize: 20
  },

});
