import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeagueInfo from './components/LeagueInfo';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeagueInfo />} />
      </Routes>
    </Router>
  );
};

export default App;