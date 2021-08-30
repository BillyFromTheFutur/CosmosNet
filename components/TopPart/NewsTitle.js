import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class NewsTitle extends Component {
    render() {
        return (
            <Text style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 20,
                marginLeft: 15,
                marginTop: 10
            }}>Last News</Text>
        )
    }
}

export default NewsTitle
