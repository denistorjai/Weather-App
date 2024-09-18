import { StyleSheet, Text, View } from 'react-native';

export default function CurrentTemperatureDisplay({ City, Temperature }) {
    return (
        <View style={styles.DisplayContainer}>
            <Text style={styles.CityText}> {City} </Text>
            <Text style={styles.TemperatureText}> {Temperature}° </Text>
        </View>
    )
}

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
        fontSize: 50,
        paddingTop: 20,
    }
  });
