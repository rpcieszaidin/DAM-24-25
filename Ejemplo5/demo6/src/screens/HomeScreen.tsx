import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/useMovies'

export default function HomeScreen() {
    const {nowPlaying, loading} = useMovies();
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})