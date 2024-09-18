// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Componnents
import CurrentTempeatureDisplay from './Components/CurrentDisplay.js'

export default function App() {
  return (
    <View style={styles.container}>
      <CurrentTempeatureDisplay City={"Calgary"} Tempeature={"39.4"} > </CurrentTempeatureDisplay>
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
