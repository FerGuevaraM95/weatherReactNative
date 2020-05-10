import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {Form} from './components/Form';

const hideKeyboard = () => {
  Keyboard.dismiss();
};

const App = () => {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
        <View style={styles.app}>
          <View style={styles.content}>
            <Form />
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
    backgroundColor: 'rgb(71, 149, 212)',
  },
  content: {
    marginHorizontal: '2.5%',
  },
});

export default App;
