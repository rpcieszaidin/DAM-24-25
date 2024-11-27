import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/useMovies'
import Slider from '../components/Slider';

export default function HomeScreen() {
    const { nowPlaying, loading } = useMovies();
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})