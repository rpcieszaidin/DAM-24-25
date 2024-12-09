import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useReducer } from 'react'

interface counterData {
    hour: number;
    minutes: number;
    ring: string
}

const initialState: counterData = {
    hour: 0,
    minutes: 0,
    ring: "00:00"
}

type ActionType = { type: 'incrementar_hora' } | { type: 'decrementar_hora' } |
{ type: 'cambiar_ring', payload: string }


const timeReducer = (state: counterData, action: ActionType) => {
    switch (action.type) {
        case 'incrementar_hora':
            return { ...state, hour: state.hour + 1 }
        case 'decrementar_hora':
            return { ...state, hour: state.hour - 1 }
        case 'cambiar_ring':
            return { ...state, ring: action.payload }
        default:
            return state;
    }
}


export default function ContadorScreen() {
    //const [dataTime, dispatch] = useReducer(timeReducer, initialState);
    const [{ hour, minutes, ring }, dispatch] = useReducer(timeReducer, initialState);

    return (
        <View>
            <Text>{hour}</Text>
            <Text>{minutes}</Text>
            <Text>{ring}</Text>
            <Button
                onPress={() => { dispatch({ type: 'incrementar_hora' }) }}
                title="Incrementar hora"
                color="#841584"
            />
            <Button
                onPress={() => { dispatch({ type: 'decrementar_hora' }) }}
                title="Decrementar hora"
                color="#841584"
            />
            <Button
                onPress={() => { dispatch({ type: 'cambiar_ring', payload: '12:43' }) }}
                title="Asignar hora"
                color="#841584"
            />
        </View>
    )
}

const styles = StyleSheet.create({})