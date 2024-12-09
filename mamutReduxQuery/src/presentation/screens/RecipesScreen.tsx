import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useGetAllRecipesQuery,useGetRecipesByIdQuery } from '../../services/features/recipes/recipesSlice'

export default function RecipesScreen() {
    //const { data: posts, error, isLoading } = useGetAllRecipesQuery({});
    const { data: posts, error, isLoading } = useGetRecipesByIdQuery(1);
    if (isLoading) return <Text>Cargando posts...</Text>;
    if (error) return <Text>Error al cargar posts</Text>;
    console.log(posts);
    return (
        <View>
            <FlatList
                data={posts.recipes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{item.difficulty}</Text>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})