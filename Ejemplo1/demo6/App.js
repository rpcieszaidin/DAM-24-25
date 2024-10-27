import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const lista = {
  carLists : [
    {
      matricula: "23222GBD",
      marca: "Seat",
      propietario: "Manuel Torres Torres"
    },
    {
      matricula: "453454GVD",
      marca: "Opel",
      propietario: "Raquel Torres Torres"
    }
  ]
}

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen data={lista} text="Lista de elementos" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
  },
});
