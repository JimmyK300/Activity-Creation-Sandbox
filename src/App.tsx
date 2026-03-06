import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import PublicPage from './pages/PublicPage';
import Activity from './pages/Activity';
const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/public" element={<PublicPage />} />
        <Route path="/activity/:id" element={<Activity/>}/>
      </Route>
    </Routes>
  );
};

export default App;