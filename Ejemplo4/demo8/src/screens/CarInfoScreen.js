import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TextInfo from '../components/TextInfo';

const CarInfoScreen = ({route, navigation}) => {
  const data = route.params;
  console.log(data);
  return (
    <View>
      <TextInfo label="Matrícula" value={data.item.matricula} />
      <TextInfo label="Color" value={data.item.color} />
      <TextInfo label="Marca" value={data.item.marca} />
      <TextInfo label="Averia" value={data.item.averia} />
    </View>
  )
}

export default CarInfoScreen

const styles = StyleSheet.create({})