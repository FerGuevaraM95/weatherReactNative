import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native';
import {Picker} from '@react-native-community/picker';

export const Form = () => {

  const [animationButton] = useState(new Animated.Value(1));

  const animationIn = () => {
    Animated.spring(animationButton, {
      toValue: 0.75,
    }).start();
  };

  const animationOut = () => {
    Animated.spring(animationButton, {
      toValue: 1,
      friction: 4,
      tension: 30,
    }).start();
  };

  const styleAnimation = {
    transform: [{scale: animationButton}],
  };

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
        <TouchableWithoutFeedback
          onPressIn={() => animationIn()}
          onPressOut={() => animationOut()}>
          <Animated.View style={[styles.button, styleAnimation]}>
            <Text style={styles.buttonText}>Buscar Clima</Text>
          </Animated.View>
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
