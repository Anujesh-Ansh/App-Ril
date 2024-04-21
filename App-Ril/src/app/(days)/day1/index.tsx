import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DayDetailsScreen = () => {
    return (
        <View style={styles.container}>
            
            <Stack.Screen options={{title: 'Day 1'}}/>
            <Text style={styles.text}>index 1</Text>
        </View>
    )
}

export default DayDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20,
    }
})