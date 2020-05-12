import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Weather = ({result: {name, main, weather}}) => {
  if(!name) return null;

  const KELVIN = 273.15;

  return (
    <View style={styles.weather}>
      <Text style={[styles.text, styles.current]}>
        {parseInt(main.temp - KELVIN)}
        <Text style={styles.temperature}>&#x2103;</Text>
        <Image
          style={{width: 66, height: 58}}
          source={{
            uri: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
          }}
        />
      </Text>
      <View style={styles.minMax}>
        <Text style={styles.text}> Min {' '}
          <Text style={styles.temperature}>{parseInt(main.temp_min - KELVIN)} &#x2103;</Text>
        </Text>
        <Text style={styles.text}> Max {' '}
          <Text style={styles.temperature}>{parseInt(main.temp_max - KELVIN)} &#x2103;</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weather: {
    marginBottom: 20,
  },
  text: {
    marginRight: 20,
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  current: {
    marginRight: 0,
    fontSize: 80,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  minMax: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
