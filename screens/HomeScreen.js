import React, { Component } from 'react'
import { Text, View } from 'react-native'
import NewsTitle from '../components/TopPart/NewsTitle'

export class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <NewsTitle />
            </View>
        )
    }
}

export default HomeScreen
