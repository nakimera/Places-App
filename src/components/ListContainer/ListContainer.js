import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

import ListItem from '../ListItem/ListItem';
import { placesVisited as places } from "../../../app.json";

const PlacesList = () => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>Places I want to visit</Text>
      <FlatList data={places} renderItem={({ item }) => <ListItem placeName={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '90%',
        marginTop: 50,
    },
    title: {
        fontSize: 20,
        marginBottom: 20
    }
})

export default PlacesList;
