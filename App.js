import React, {Component} from 'react';
import { Container, H1, H3, H4 } from 'native-base';
import { StyleSheet, Text, ScrollView } from 'react-native';
import AddPlaceContainer from './src/components/AppPlaceContainer/AddPlacesContainer';
import PlacesList from './src/components/ListContainer/ListContainer';

export default class App extends Component{
  render() {
    return (
      <ScrollView>
      <Container style={styles.container}>
        <H3 style={styles.colorOrange}>Welcome to</H3>
        <H1 style={styles.colorOrange}>Places bucketlist app!</H1>
        <AddPlaceContainer />
        <PlacesList />
      </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
  },
  colorOrange: {
    color: 'orangered',
    margin: 10
  }
});
