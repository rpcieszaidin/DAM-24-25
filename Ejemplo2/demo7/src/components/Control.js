import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Control = ({control}) => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.element}>
                <Button style={styles.element} onPress={
                    ()=>{ control(0)}
                } title="Añadir" color="#841584" accessibilityLabel="Learn more about this purple button" />
            </View>
            <View style={styles.element}>
                <Button style={styles.element} onPress={
                    ()=>{ control(1)}
                } title="Eliminar" color="#841584" accessibilityLabel="Learn more about this purple button" />
            </View>
        </View>
    )
}

export default Control

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
    },
    element: {
        flex: 1,
        height: 50,
        justifyContent: 'center'
    }
})