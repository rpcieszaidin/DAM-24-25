import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Movie } from '../config/entities/Movie'

interface Movies {
  movies: Movie[];
  height: number;
}

export default function Slider({ movies, height }: Movies) {
  return (
    <View>
      <ScrollView style = {styles.contenedor} horizontal={true}>
        {movies.map((item) => (
          <Image style = {styles.imagen} key = {item.id}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster}`,
            }}
          />
        ))}
      </ScrollView>
      <Pressable>
         <Text>Siguiente página</Text>
      </Pressable>
    </View>
  )

}

const styles = StyleSheet.create({
  contenedor: {
    height: 300,
  }, 
  imagen: {
    width: 200,
    //height: 200,
    margin: 1
  }
})