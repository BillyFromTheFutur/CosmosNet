import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export class CreateurImage extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                maxHeight: 45,
                maxWidth: 45,
            }}>
                <Image
                    source={require('./roskosmos.jpg')/*{ uri: 'https://reactnative.dev/img/tiny_logo.png' }*/}
                    style={styles.photo}
                />
            </View>


        )
    }
}

export default CreateurImage
const styles = StyleSheet.create({
    photo: {
        marginTop: 10,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden'

    }
})