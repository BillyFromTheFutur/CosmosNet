import React, { Component } from 'react'
import { Text, View } from 'react-native'
import NewsCard from '../components/TopPart/NewsCard'
import NewsTitle from '../components/TopPart/NewsTitle'
import TopSection from '../components/TopPart/TopSection'

export class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <NewsTitle />
                <TopSection />
            </View>
        )
    }
}

export default HomeScreen
