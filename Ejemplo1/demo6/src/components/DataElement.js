import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DataElement = ({itemData}) => {
  return (
    <View style={styles.content}>
      <Text>{itemData.propietario}</Text>
      <Text>{itemData.matricula}</Text>
      <Text>{itemData.marca}</Text>
    </View>
  )
}

export default DataElement

const styles = StyleSheet.create({
    content: {
        borderWidth: 1,
        margin: 3,
        padding: 3
    }
})