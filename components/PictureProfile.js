import React, { Component } from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
//import { Avatar } from 'native-base';
export class PictureProfile extends Component {
    render() {
        return (
            <View style={{
                padding: 5,
                overflow: 'hidden',

            }}>
                <Image
                    source={require('./picture.png')/*{ uri: 'https://reactnative.dev/img/tiny_logo.png' }*/}
                    style={styles.photo}
                />
            </View>
            /*<Avatar
                source={{
                    uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
                }}
            >
                SS
            </Avatar>*/
        )
    }
}

export default PictureProfile
const styles = StyleSheet.create({
    photo: {
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 3,
        paddingLeft: 5,
        height: 40,
        width: 40,
        flex: 1,
        justifyContent: 'center',
        overflow: 'hidden'

    }
})