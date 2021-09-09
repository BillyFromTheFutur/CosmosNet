import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import NewsCard from '../components/TopPart/NewsCard'
import NewsTitle from '../components/TopPart/NewsTitle'
import TopSection from '../components/TopPart/TopSection'

export class HomeScreen extends Component {
    render() {
        return (
            <ScrollView style={{ minHeight: (Dimensions.get('window').height) - 50 }}>
                <View style={{ flex: 1, backgroundColor: 'black', minHeight: (Dimensions.get('window').height) - 50 }}>
                    <NewsTitle />
                    <TopSection />
                    <TopSection />
                </View>
            </ScrollView>
        )
    }
}

export default HomeScreen
