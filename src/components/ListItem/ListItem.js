import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import placeImage from '../../assets/images/eiffel-tower-.jpg';

const ListItem = (props) => (
    <View style={styles.container}>
        <Image source={placeImage} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.placeName}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: '#42cbf4',
        width: '100%',
        marginBottom: 15,
        alignItems: "center",
    },
    placeImage:{
        width: '100%',
        height: '60%',
    },
    placeName: {
        fontSize: 20,
        color: 'white',
        marginTop: 25
    }
})

export default ListItem;