import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import PictureProfile from '../PictureProfile'
import CreateurImage from './CreateurImage'
import { BlurView } from 'expo-blur';



export const NewsCard = ({ article }) => {

    const { imageUrl, title, summary, publishedAt, newsSite } = article.item;

    return (
        <View style={styles.card}>
            <ImageBackground source={{ uri: imageUrl }}
                style={{
                    height: 535,
                    width: 280,
                    justifyContent: 'flex-end',
                    flex: 1
                }}>
                <BlurView intensity={100} tint="dark" style={{
                    width: 280,
                    maxHeight: 250,
                    flex: 1,
                }}>
                    <Text style={styles.title}> {title} </Text>
                    <Text style={styles.resume}>{summary}</Text>
                    <View style={{
                        maxHeight: 250,
                        width: 280,
                        justifyContent: 'flex-end',
                        flex: 1
                    }}>
                        <View style={{
                            maxHeight: 80,
                            width: 280,
                            backgroundColor: 'transparent',
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <View>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    paddingLeft: 10,
                                    paddingTop: 15
                                }} >
                                    {newsSite}</Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: 'white',
                                    paddingLeft: 10,
                                    paddingTop: 5
                                }}>{publishedAt}</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                maxHeight: 80,
                                maxWidth: 60
                            }}>
                                <CreateurImage />
                            </View>
                        </View>
                    </View>
                </BlurView>
            </ImageBackground>

        </View>
    )
}


export default NewsCard

const styles = StyleSheet.create({
    card: {
        maxHeight: 500,
        minWidth: 280,
        backgroundColor: 'blue',
        marginLeft: 7.5,
        marginRight: 7.5,
        marginTop: 15,
        borderRadius: 15,
        overflow: 'hidden',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 10,
        paddingTop: 15
    },
    resume: {
        fontSize: 16,
        color: 'white',
        position: 'absolute',
        paddingLeft: 10,
        paddingTop: 55
    }
})
