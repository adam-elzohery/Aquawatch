import React from 'react';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import SubmitDataButton from '../../components/SubmitManualDataButton';
import SubmitDataButton from '../../components/SubmitSensorDataButton';


const SubmitDataScreen = () => {
  return (
    <Background>
      <Logo />
      <SubmitSensorDataButton title="Submit Sensor Data" />
      <SubmitManualDataButton title="Submit Manual Data" onPress={() => navigation.navigate('manualdataentryscreen') } />
      <Footer />
    </Background>
  );
};

export default SubmitDataScreen;