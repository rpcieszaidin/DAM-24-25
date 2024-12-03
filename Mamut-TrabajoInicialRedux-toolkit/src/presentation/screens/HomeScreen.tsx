import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setEmail, setUser } from '../../services/features/users/usersSlice';

export default function HomeScreen() {
    const user = useAppSelector(state => state.users.user);
    const dispatch = useAppDispatch();
    return (
        <View>
            <Text>HomeScreen</Text>
            <Text>{user}</Text>
            <Button onPress={() => dispatch(setUser())} title='Pulsa aquí' color="#841584" accessibilityLabel="Learn more about this purple button" />
            <Button onPress={() => dispatch(setEmail("Hola@hola.es"))} title='Pulsa aquí' color="#841584" accessibilityLabel="Learn more about this purple button" />
        </View>
    )
}

const styles = StyleSheet.create({})