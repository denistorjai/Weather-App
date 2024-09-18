// Imports
import { StyleSheet, Text, View } from 'react-native';

// Component Rendering
export default function CurrentTemperatureDisplay({ ForecastData }) {
    return (
        <View style={styles.DisplayContainer}>
            <Text style={styles.CityText}> {City} </Text>
        </View>
    )
}

// Style Sheet
const styles = StyleSheet.create({
    DisplayContainer: {
        display: 'flex',
        alignItems: 'flex-start',
    },
});
