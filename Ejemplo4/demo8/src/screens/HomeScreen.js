import { StyleSheet, Text, View, FlatList,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import CarItem from '../components/CarItem';

export default function HomeScreen({ navigation }) {
    const [carData, setCarData] = useState({
        data: []
    });

    const [error, setError] = useState({
        last: ""
    });

    const updateCars = () => {
        fetch("http://10.0.0.40:3000/").then(async (data) => {
            await data.json().then((jsonData) => {
                setCarData(jsonData);
            }, (e) => { setError({ last: e }) })
        }, (e) => { setError({ last: e }) });
    }

    const newCar = () => {
        const error = () => { }
        const dataToSend = {
            coche : {
                marca : '',
                matricula: '',
                color: '',
                averia: ''
            }
        }

        fetch("http://10.0.0.40:3000/coche", {
            method: "POST",
            body: JSON.stringify( dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((data) => {
            console.log(data);
        }, (e) => { setError({ last: e }) });
    }

    useEffect(() => {
        updateCars();
    }, []);

    return (
        <View>
            <Button title='Nuevo coche' onPress={() => {
                newCar();
            }} />
            <Text style={styles.labelText}>Lista actual de coches</Text>
            <FlatList
                data={carData.data}
                renderItem={({ item }) => <CarItem navigation={navigation} item={item} />}
                keyExtractor={item => item.matricula}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    labelText: {
        margin: 5
    }
})