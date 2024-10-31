import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

export default function CarItem({navigation,item}) {
  return (
    <Pressable onPress={
      ()=>{
        navigation.navigate("Informacion",{ item })
      }  
    }>
    <View style={styles.dataBlock}>
      <Text style={styles.dataText}>{item.matricula}</Text>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  dataBlock: {
    borderRadius: 6,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#ffffff'
  },
  dataText: {
    fontWeight: "bold",
    fontSize: 15
  }
  
})