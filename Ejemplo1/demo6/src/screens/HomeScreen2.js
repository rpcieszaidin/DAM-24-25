import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen2 = ({ data, text }) => {
    console.log(data);
    return (
        <View>
            <Text>{text}</Text>
        </View>
    )
}

export default HomeScreen2

const styles = StyleSheet.create({})