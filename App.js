// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

// Components
import CurrentTemperatureDisplay from './Components/CurrentDisplay.js'

// Constants - Make it dynamic later or whatever
const LATITUDE = 51.05;
const LONGITUDE = -114.07;

export default function App() {

  // Variables
  const [temperature, setTemperature] = useState(null);
  const [weathercode, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Data Function off of API
  useEffect(() => {

    const FetchWeatherData = async () => {
      // Try Catch
      try {
        // Fetching
        const AwaitedData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current_weather=true`);
        const Data = await AwaitedData.json();
        
        // Setting Data
        setTemperature(Math.round(Data.current_weather.temperature));
        setWeather(Data.current_weather.weathercode);

        setLoading(false);
        // Error Catching
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    };

    // Fetch Data
    FetchWeatherData();

  }, []);

  // Render Data
  return (
    <View style={styles.container}>
      <CurrentTemperatureDisplay City={"Calgary"} Temperature={temperature} WeatherCode={weathercode} > </CurrentTemperatureDisplay>
      <StatusBar style="auto" />
    </View>
  );
}

// Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFCFC',
    alignItems: 'flex-start',
    paddingTop: 80,
  },
});
