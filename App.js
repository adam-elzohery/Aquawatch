import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/homescreen/HomeScreen';
import SubmitDataScreen from './screens/submitdatascreen/submitdatascreen';
import ManualDataEntryScreen from './screens/manualdataentryscreen/manualdataentryscreen';
import SubmissionSuccessScreen from './screens/submissionsuccessscreen/submittedsuccesfullyscreen';

import './App.css'; // Global styles

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/submit-data" element={<SubmitDataScreen />} />
        <Route path="/manual-data-entry" element={<ManualDataEntryScreen />} />
        <Route path="/submission-success" element={<SubmissionSuccessScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
