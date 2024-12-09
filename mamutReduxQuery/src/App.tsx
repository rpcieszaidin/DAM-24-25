import './gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './presentation/screens/HomeScreen';
import ContadorScreen from './presentation/screens/ContadorScreen';


import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './app/store';
import RecipesScreen from './presentation/screens/RecipesScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={RecipesScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

const styles = StyleSheet.create({})