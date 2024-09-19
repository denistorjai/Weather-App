// Imports
import { StyleSheet, Text, View, Image } from 'react-native';

// Icons
import Sunny from '../assets/Sunny.svg'
import Cloudy from '../assets/Cloudy.svg'
import Rainy from '../assets/Rainy.svg'
import Snowy from '../assets/Snow.svg'
import Windy from '../assets/Windy.svg'
import Thunderstorm from '../assets/Thunder.svg'

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

// Determine Icon for Weather
const getWeatherIcon = (WeatherCode) => {
    switch (true) {
        case (WeatherCode === 0 || WeatherCode === 1):
            return <Sunny width={320} height={320} />;
        case (WeatherCode === 2 || WeatherCode === 3):
            return <Cloudy width={320} height={320} />;
        case (WeatherCode >= 51 && WeatherCode <= 65):
            return <Rainy width={320} height={320} />;
        case (WeatherCode === 80 || WeatherCode === 81 || WeatherCode === 82):
            return <Windy width={320} height={320} />;
        case ((WeatherCode >= 71 && WeatherCode <= 75) || (WeatherCode >= 85 && WeatherCode <= 86)):
            return <Snowy width={320} height={320} />;
        case (WeatherCode >= 95 && WeatherCode <= 99):
            return <Thunderstorm width={320} height={320} />;
        default:
            // Default to Sunny if no icon is mapped
            return <Sunny width={320} height={320} />;
    }
}

// Component Rendering
export default function CurrentTemperatureDisplay({ City, Temperature, WeatherCode }) {

    // Get Condition & Display / Get Icon
    const Weather = getWeather(WeatherCode);
    const WeatherIcon = getWeatherIcon(WeatherCode)

    return (
        <View style={styles.DisplayContainer}>
            <Text style={styles.CityText}> {City} </Text>
            <View style={styles.WeatherContainer}>
                {WeatherIcon}
            </View>
            <Text style={styles.TemperatureText}> {Temperature}° </Text>
            <Text style={styles.WeatherText}> {Weather} </Text>
        </View>
    )
}

// Style Sheet
const styles = StyleSheet.create({
    DisplayContainer: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    CityText: {
        color: '#111827',
        fontSize: 36,
        fontWeight: '600',
    },
    TemperatureText: {
        fontSize: 60,
    },
    WeatherText: {
        fontSize: 19,
        paddingTop: 5,
    },
    WeatherContainer: {
        display: 'flex',
        alignItems: 'center',
    }
});
