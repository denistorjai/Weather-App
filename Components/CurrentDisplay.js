// Imports
import { StyleSheet, Text, View } from 'react-native';

// Component Rendering
export default function CurrentTemperatureDisplay({ City, Temperature, Weather }) {
    return (
        <View style={styles.DisplayContainer}>
            <Text style={styles.CityText}> {City} </Text>
            <Text style={styles.TemperatureText}> {Temperature}° </Text>
            <Text style={styles.WeatherText}> {Weather} </Text>
        </View>
    )
}

// Style Sheet
const styles = StyleSheet.create({
    DisplayContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    CityText: {
        color: '#25292e',
        fontSize: 27,
    },
    TemperatureText: {
        fontSize: 60,
        paddingTop: 30,
    },
    WeatherText: {
        fontSize: 19,
        paddingTop: 5,
    }
  });
