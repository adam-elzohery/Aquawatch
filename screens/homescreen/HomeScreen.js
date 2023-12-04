import React from 'react';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import WatchTutorialButton from '../../components/WatchTutorialButton';
import SubmitDataButton from '../../components/SubmitDataButton';
import PurchaseSensorButton from '../../components/PurchaseSensorButton';
import ShowReportsButton from '../../components/ShowReportsButton';
import PointsButton from '../../components/PointsButton';
import PairSensorButton from '../../components/PairSensorButton';

const HomeScreen = () => {
  return (
    <Background>
      <Logo />
      <WatchTutorialButton />
      <SubmitDataButton onPress={() => navigation.navigate('submitdatascreen')} />
      <PurchaseSensorButton />
      <ShowReportsButton />
      <PointsButton />
      <PairSensorButton />
    </Background>
  );
};

export default HomeScreen;
