import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class AddPlaceContainer extends Component {
    state = { 
        placeName: '',
     }
    render() { 
        return ( 
            <View>
                <TextInput style={styles.textField} />
                <Button title='ADD'style={styles.button} />
            </View>
         );
    }
}

const styles = StyleSheet.create({
    textField: {
        borderBottomColor: '#333333',
        width: 300,
        borderBottomWidth: 1,
        marginTop: 30,
        marginBottom: 15,
    },
    button: {
        backgroundColor: 'coral',
        color: 'white'
    }
})
 
export default AddPlaceContainer;