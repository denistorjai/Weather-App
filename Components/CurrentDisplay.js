import { StyleSheet, Text, View } from 'react-native';

export default function CurrentTempeatureDisplay({ City, Tempeature }) {
    return (
        <View style={styles.DisplayContainer}>
            <Text style={styles.CityText}> {City} </Text>
            <Text style={styles.TempeatureText}> {Tempeature} </Text>
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
    TempeatureText: {
        fontSize: 50,
        paddingTop: 20,
    }
  });
