import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const submittedsuccesfullyscreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.successMessage}>Data submitted successfully</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Return to Main Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successMessage: {
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00b6b6',
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default submittedsuccesfullyscreen;
