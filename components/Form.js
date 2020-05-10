import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Picker} from '@react-native-community/picker';

export const Form = () => {
  return (
    <>
      <View style={styles.form}>
        <View>
          <TextInput style={styles.input} placeholder="Ciudad" placeholderTextColor="#666666" />
        </View>
        <View>
          <Picker itemStyle={styles.picker}>
            <Picker.Item label="-- Seleccione un país --" value="" />
            <Picker.Item label="México" value="MX" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Costa Rica" value="CR" />
            <Picker.Item label="España" value="ES" />
            <Picker.Item label="Perú" value="PE" />
          </Picker>
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Buscar Clima</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    padding: 10,
    height: 50,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
  },
  picker: {
    height: 120,
    backgroundColor: '#FFFFFF',
  },
  button: {
    marginTop: 50,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
