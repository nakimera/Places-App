import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text, Card, CardItem } from "native-base";
import placeImage from "../../assets/images/eiffel-tower-.jpg";

const ListItem = props => (
  <View>
    <Card style={styles.card}>
      <CardItem cardBody>
        <Image source={placeImage} style={styles.placeImage} />
      </CardItem>
      <CardItem cardBody style={styles.cardTitle}>
        <Text style={styles.placeName}>{props.placeName}</Text>
      </CardItem>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: "100%",
    marginBottom: 25,
  },
  placeImage: {
    width: "100%",
    height: 150
  },
  placeName: {
    fontSize: 20,
    color: "white",
  },
  cardTitle: {
    height: 50,
    backgroundColor: "orangered",
    justifyContent: "center"
  }
});

export default ListItem;
