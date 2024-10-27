import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import DataElement from '../components/DataElement'

const HomeScreen4 = ({ data, text }) => {
  return (
    <View>
      <Text>{text}</Text>
      <FlatList
        data={data.carLists}
        renderItem={({item}) => <DataElement itemData={item}/>}
        keyExtractor={item => item.matricula}
      />
    </View>
  )
}

export default HomeScreen4

const styles = StyleSheet.create({})