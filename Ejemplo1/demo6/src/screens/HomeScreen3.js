import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'

const HomeScreen3 = ({ data, text }) => {
  return (
    <View>
      <Text>{text}</Text>
      <FlatList
        data={data.carLists}
        renderItem={({item}) => <Text>{item.propietario}</Text>}
        keyExtractor={item => item.matricula}
      />
    </View>
  )
}

export default HomeScreen3

const styles = StyleSheet.create({})