import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CarItem from '../components/CarItem';

export default function HomeScreen({navigation}) {
    const [ carData, setCarData ] = useState({
        data: []
    });

    const [ error, setError ] = useState({
        last: ""
    });

    const updateCars = () => {
        const error = () => { }
        fetch("http://10.0.0.40:3000/").then( async (data) => {
            await data.json().then((jsonData)=>{
                setCarData(jsonData);
            },(e)=>{ setError({last:e})})
        }, (e)=>{ setError({last:e})});
    }

    useEffect(()=>{
        updateCars();
    },[]);

    return (
        <View>
            <Text style={styles.labelText}>Lista actual de coches</Text>
            <FlatList
                data={carData.data}
                renderItem={({item}) => <CarItem navigation={navigation} item={item} />}
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