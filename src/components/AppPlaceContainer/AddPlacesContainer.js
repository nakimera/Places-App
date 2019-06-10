import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, Input, Item } from "native-base";

class AddPlaceContainer extends Component {
  state = {
    placeName: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <Item><Input placeholder="Enter a place you would like to visit" style={styles.textField} /></Item>
        <Button full rounded style={styles.button}>
          <Text>Add Place</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textField: {
    marginTop: 20,
  },
  button: {
    marginTop: 15,
    backgroundColor: 'orangered'
  },
  container: {
      width: '100%',
      padding: 20,
  }
});

export default AddPlaceContainer;
