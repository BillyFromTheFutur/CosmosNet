import React, { Component } from 'react'
import { ScrollView, Text, View, Dimensions } from 'react-native'
import NewsCard from './NewsCard'
import NewsTitle from './NewsTitle'

export class TopSection extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: 'grey',
                marginTop: 15,
                marginLeft: 7.5,
                width: (Dimensions.get('window').width) - 15,
                flex: 1,
                justifyContent: 'center',
                maxHeight: 530
            }}>
                <ScrollView horizontal={true} style={{ backgroundColor: 'grey' }}>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </ScrollView>
            </View>
        )
    }
}

export default TopSection
