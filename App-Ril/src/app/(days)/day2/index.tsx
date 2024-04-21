import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const DayDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Day 2'}}/>
      <Text style={styles.text}>index 2</Text>
      <Link href='/day2/onboarding' asChild>
        <Button title='Go to OnBoarding'/>
      </Link>

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
        fontSize: 30,
        fontFamily: 'AmaticBold',
    }
})