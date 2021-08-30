import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class MessageScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' }}>
                <Text>Settings!</Text>
            </View>
        )
    }
}

export default MessageScreen
