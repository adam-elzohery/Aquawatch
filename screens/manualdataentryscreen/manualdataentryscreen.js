import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';

const manualdataentryscreen = () => {
  const [phLevel, setPhLevel] = useState('');
  const [density, setDensity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [purity, setPurity] = useState('');
  const [turbidity, setTurbidity] = useState('');
  const [salinity, setSalinity] = useState('');

  const handleSubmit = () => {
    console.log({ phLevel, density, temperature, purity, turbidity, salinity });
  };

  return (
    <Background>
      <ScrollView style={styles.container}>
        <Logo />
        <View style={styles.form}>
          <Text style={styles.label}>Ph Level:</Text>
          <TextInput style={styles.input} value={phLevel} onChangeText={setPhLevel} keyboardType="numeric" />

          <Text style={styles.label}>Density:</Text>
          <TextInput style={styles.input} value={density} onChangeText={setDensity} keyboardType="numeric" />

          <Text style={styles.label}>Temperature:</Text>
          <TextInput style={styles.input} value={temperature} onChangeText={setTemperature} keyboardType="numeric" />

          <Text style={styles.label}>Purity:</Text>
          <TextInput style={styles.input} value={purity} onChangeText={setPurity} keyboardType="numeric" />

          <Text style={styles.label}>Turbidity:</Text>
          <TextInput style={styles.input} value={turbidity} onChangeText={setTurbidity} keyboardType="numeric" />

          <Text style={styles.label}>Salinity:</Text>
          <TextInput style={styles.input} value={salinity} onChangeText={setSalinity} keyboardType="numeric" />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit Data</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00b6b6',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default manualdataentryscreen;
