import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Container, Text } from "native-base";

import ListItem from '../ListItem/ListItem';
import { placesVisited as places } from "../../../app.json";

const PlacesList = () => {
  return (
    <Container style={styles.listContainer}>
      <Text style={styles.title}>Places I want to visit</Text>
      <FlatList data={places} renderItem={({ item }) => <ListItem placeName={item} />} />
    </Container>
  );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '90%',
    },
    title: {
        fontSize: 20,
        marginBottom: 20
    }
})

export default PlacesList;
