import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import {Weather} from './components/Weather';
import {Form} from './components/Form';


const App = () => {

  const [search, setSearch] = useState({
    county: '',
    city: '',
  });
  const [request, setRequest] = useState(false);
  const [result, setResult] = useState({});
  const [bgColor, setBgColor] = useState('rgb(71, 149, 212)');

  const {country, city} = search;

  useEffect(() => {
    const getWeather = async () => {
      if (request) {
        const appId = '417559bcf2313ef04d43f654c86481da';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        try {
          const response = await fetch(url);
          const result = await response.json();
          setResult(result);
          setRequest(false);

          // Change bg color
          const KELVIN = 273.15;
          const {main} = result;
          const current = parseInt(main.temp - KELVIN);

          if(current < 10) {
            setBgColor('rgb(105, 108, 149)');
          } else if (current >= 10 && current < 25) {
            setBgColor('rgb(71, 149, 212)');
          } else {
            setBgColor('rgb(178, 28, 61)');
          }
        } catch (error) {
          showAlert();
        }
      }
    };
    getWeather();
  }, [request]);

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const showAlert = () => {
    Alert.alert('Error', 'No hay resultados, intenta con otro país o ciudad', [
      {text: 'Entendido'},
    ]);
  };

  const bgColorApp = {
    backgroundColor: bgColor,
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
        <View style={[styles.app, bgColorApp]}>
          <View style={styles.content}>
            <Weather result={result} />
            <Form
              search={search}
              setSearch={setSearch}
              setRequest={setRequest}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: '2.5%',
  },
});

export default App;
