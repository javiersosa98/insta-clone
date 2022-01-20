import React from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <AddNewPost navigation={navigation} />
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

export default NewPostScreen
