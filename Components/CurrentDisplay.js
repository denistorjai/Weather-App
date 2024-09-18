// Imports
import { StyleSheet, Text, View } from 'react-native';

// Weather Codes & Their Values
const getWeather = (WeatherCode) => {
    const Conditions = {
        0: "Clear Sky", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast", 45: "Fog", 48: "Rime Fog",
        51: "Light Drizzle", 53: "Moderate Drizzle", 55: "Heavy Drizzle", 61: "Light Rain", 63: "Moderate Rain",
        65: "Heavy Rain", 71: "Light Snowfall", 73: "Moderate Snowfall", 75: "Heavy Snowfall", 80: "Light Showers",
        81: "Moderate Showers", 82: "Heavy Showers", 85: "Light Snow Showers", 86: "Heavy Snow Showers", 95: "Thunderstorm",
        96: "Thunderstorm with Light Hail", 99: "Thunderstorm with Heavy Hail",
    };
    // Return Value or Unknown
    return Conditions[WeatherCode] || "Unknown Weather";
}

// Component Rendering
export default function CurrentTemperatureDisplay({ City, Temperature, WeatherCode }) {

    // Get Condition & Display
    const Weather = getWeather(WeatherCode);

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
