import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import { db } from '../firebase'

const HomeScreen = ({ navigation }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collectionGroup('posts')
            .onSnapshot((snapshot) => {
                setPosts(snapshot.docs.map((post) => (
                    {
                        id: post.id,
                        ... post.data()
                    }
                )))
            },
            error => {console.log("error caused by singOut (not important) ->", error.message)})
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {posts.map((post, index) => (
                    <Post post={post} key={index} /> 
                ))}
                <View style={{height:20}} />
            </ScrollView>
            <BottomTabs icons={bottomTabIcons} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        //marginTop: StatusBar.currentHeight,
    }
})

export default HomeScreen



