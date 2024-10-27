import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Control from '../components/Control'

const lista = [];

const cambiarLista = (cmd) => {
    switch(cmd) {
        case 0: 
            lista.push("Elemento "+lista.length);
            break;
        case 1:
            lista.pop();
            break;
    }
    console.log(lista);
}

const HomeScreen = () => {
  return (
    <View>
      <Control control={cambiarLista}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})