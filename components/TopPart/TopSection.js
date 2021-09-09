import React, { Component, useEffect, useState } from 'react'
import { ScrollView, Text, View, Dimensions, FlatList } from 'react-native'
import NewsCard from './NewsCard';
import axios from 'axios';
import NewsTitle from './NewsTitle'

function TopSection() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("https://api.spaceflightnewsapi.net/v3/articles")
            .then((res) => {
                setArticles(res.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

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
            <FlatList
                data={articles}
                horizontal
                renderItem={item => (
                    <NewsCard article={item} />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}


export default TopSection;
/*
<ScrollView horizontal={true} style={{ backgroundColor: 'grey' }}>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </ScrollView>*/
