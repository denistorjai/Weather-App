// Imports
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

// Components
import CurrentTemperatureDisplay from './Components/CurrentDisplay.js';
import ForecastDisplay from './Components/ForecastDisplay.js';
import DailyDisplay from './Components/DailyDisplay.js'

// Constants - Make it dynamic later or whatever
const LATITUDE = 51.05;
const LONGITUDE = -114.07;

export default function App() {

  // Variables
  const [temperature, setTemperature] = useState(null);
  const [weathercode, setWeather] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [dailyForecastData, setDailyForecastData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Data Function off of API
  useEffect(() => {

    const FetchWeatherData = async () => {
      // Try Catch
      try {
        // Fetching
        const AwaitedData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current_weather=true&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode`);
        const Data = await AwaitedData.json();
        
        // Setting Data
        setTemperature(Math.round(Data.current_weather.temperature));
        setWeather(Data.current_weather.weathercode);

        // Forecasting
        const currentHour = new Date().getHours(); 
        const forecast = Data.hourly.temperature_2m.slice(1, 6).map((temp, index) => { 
        const forecastHour = (currentHour + index + 1) % 24; 
          return {
            temperature: Math.round(temp),
            weatherCode: Data.hourly.weathercode[index + 1],
            hour: forecastHour,
          };
        });

        setForecastData(forecast);

        // Daily forecast
        const dailyForecast = Data.daily.time.map((day, index) => ({
          day: day, // Corrected 'date' to 'day'
          minTemperature: Math.round(Data.daily.temperature_2m_min[index]),
          maxTemperature: Math.round(Data.daily.temperature_2m_max[index]),
          weatherCode: Data.daily.weathercode[index],
        }));

        setDailyForecastData(dailyForecast);

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

  // Function to format the time
  const formatHour = (hour) => {
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const AmPm = hour >= 12 ? 'PM' : 'AM';
    return `${formattedHour} ${AmPm}`;
  };
  
  // Get Date & Time
  const formatDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  // Render Data
  return (
    <ScrollView style={styles.scrollingframe} >
      <View style={styles.container}>
        <Text style={styles.currentdate} > {formatDate()} </Text>
        <CurrentTemperatureDisplay City={"Calgary"} Temperature={temperature} WeatherCode={weathercode} />
        <Text style={styles.headertext} > Hourly Forecast </Text>
        <View style={styles.hourlyforecastcontainer} >
          {forecastData.map((forecast, index) => (
            <ForecastDisplay
              key={index}
              Temperature={forecast.temperature}
              WeatherCode={forecast.weatherCode}
              Hour={formatHour(forecast.hour)}
            />
          ))}
        </View>
        <Text style={styles.headertext} > Weekly Forecast </Text>
        <View style={styles.dailyforecastcontainer} >
          {dailyForecastData.map((daily, index) => (
            <DailyDisplay
              key={index}
              Day={daily.day} 
              MinTemperature={daily.minTemperature}
              MaxTemperature={daily.maxTemperature}
            />
          ))}
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

// Style Sheet
const styles = StyleSheet.create({
  scrollingframe: {
    backgroundColor: '#1D2635'
  },
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
  },
  currentdate: {
    color: '#9CA3AF',
    fontSize: 17,
    fontWeight: 600,
    paddingBottom: 7,
  },
  headertext: {
    paddingTop: 35,
    paddingBottom: 17,
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff'
  },
  hourlyforecastcontainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: 22,
    flexDirection: 'row',
  },
  dailyforecastcontainer: {
    display: 'flex',
  }
});
