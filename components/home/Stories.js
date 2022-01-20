import React from 'react'
import { View, Text, ScrollView } from 'react-native'

const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Text style={{ color: 'white' }}>STORIES</Text>
            </ScrollView>
        </View>
    )
}

export default Stories
