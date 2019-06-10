import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AddPlaceContainer from './src/components/AppPlaceContainer/AddPlacesContainer';
import PlacesList from './src/components/ListContainer/ListContainer';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to my places bucketlist app!</Text>
        <Text style={styles.instructions}>Enter a place you would like to visit</Text>
        <AddPlaceContainer />
        <PlacesList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'coral'
  },
  instructions: {
    fontSize: 15,
    color: '#333333',
  },
});
