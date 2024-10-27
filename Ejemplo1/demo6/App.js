import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import HomeScreen2 from './src/screens/HomeScreen2';
import HomeScreen3 from './src/screens/HomeScreen3';
import HomeScreen4 from './src/screens/HomeScreen4';

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
      <HomeScreen2 data={lista} text="Lista de elementos" />
      <HomeScreen3 data={lista} text="Lista de elementos" />
      <HomeScreen4 data={lista} text="Lista de elementos" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
  },
});
