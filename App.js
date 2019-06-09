import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AddPlaceContainer from './src/components/AppPlaceContainer/AddPlacesContainer';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to my places app!</Text>
        <Text style={styles.instructions}>Enter a place to get started</Text>
        <AddPlaceContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 15,
    color: '#333333',
  },
});
