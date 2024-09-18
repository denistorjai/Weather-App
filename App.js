// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Componnents
import CurrentTemperatureDisplay from './Components/CurrentDisplay.js'

export default function App() {
  return (
    <View style={styles.container}>
      <CurrentTemperatureDisplay City={"Calgary"} Temperature={"39.4"} > </CurrentTemperatureDisplay>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 120,
  },
});
