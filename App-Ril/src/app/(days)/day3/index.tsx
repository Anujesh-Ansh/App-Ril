import { StyleSheet, Text, View} from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const Day3 = () => {
    return (
        <View style={styles.container} >
            <Stack.Screen options={{title: 'Hello'}} />
            <Text style={styles.text}>index</Text>
        </View>
    )
}

export default Day3

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'BungeeSpice',
    },    
})