import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import PublicPage from './pages/PublicPage';
// Viết kiểu React.FC để đồng bộ với các component khác
const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/public" element={<PublicPage />} />
      </Route>
    </Routes>
  );
};

export default App;