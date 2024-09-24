// Imports
import { StyleSheet, Text, View } from 'react-native';

// Icons
import Sunny from '../assets/Sunny.svg'
import Cloudy from '../assets/Cloudy.svg'
import Rainy from '../assets/Rainy.svg'
import Snowy from '../assets/Snow.svg'
import Windy from '../assets/Windy.svg'
import Thunderstorm from '../assets/Thunder.svg'

// Determine Icon for Weather
const getWeatherIcon = (WeatherCode) => {
    switch (true) {
        case (WeatherCode === 0 || WeatherCode === 1):
            return <Sunny width={50} height={50} />;
        case (WeatherCode === 2 || WeatherCode === 3):
            return <Cloudy width={60} height={60} />;
        case (WeatherCode >= 51 && WeatherCode <= 65):
            return <Rainy width={60} height={60} />;
        case (WeatherCode === 80 || WeatherCode === 81 || WeatherCode === 82):
            return <Windy width={60} height={60} />;
        case ((WeatherCode >= 71 && WeatherCode <= 75) || (WeatherCode >= 85 && WeatherCode <= 86)):
            return <Snowy width={60} height={60} />;
        case (WeatherCode >= 95 && WeatherCode <= 99):
            return <Thunderstorm width={60} height={60} />;
        default:
            // Default to Sunny if no icon is mapped
            return <Sunny width={60} height={60} />;
    }
}

// Component Rendering
export default function CurrentTemperatureDisplay({ Temperature, WeatherCode, Hour }) {
    
    // Get Icon
    const WeatherIcon = getWeatherIcon(WeatherCode);

    return (
        <View style={styles.DisplayContainer}>
            <Text style={styles.Hour}> {Hour} </Text>
            {WeatherIcon}
            <Text style={styles.Temp}> {Temperature}° </Text>
        </View>
    )
}

// Style Sheet
const styles = StyleSheet.create({
    DisplayContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    Hour: {
        fontWeight: '500',
        color: '#EBECED',
        paddingBottom: 8,
    },
    Temp: {
        fontWeight: '500',
        color: '#EBECED',
        paddingTop: 8,
    }
});
