import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
  const { data, text}  = props;
  console.log(data);
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})