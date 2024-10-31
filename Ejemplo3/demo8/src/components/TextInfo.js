import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextInfo = ({label,value}) => {
  return (
    <View style={styles.dataBlock}>
      <Text style={styles.textLabel}>{label}</Text>
      <Text style={styles.textValue}>{value}</Text>
    </View>
  )
}

export default TextInfo

const styles = StyleSheet.create({
    dataBlock: {
        borderWidth: 1,
        backgroundColor: "#ffffff",
        margin: 10,
        padding: 10
    },
    textLabel : {
        marginTop: 2,
        padding: 5,
        fontWeight: "bold",
        fontSize: 15
    },
    textValue : {
        padding: 3,
        marginLeft: 10
    }
})