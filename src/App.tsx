import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import PublicPage from './pages/PublicPage';
import ActivityCreationPage from './pages/ActivityCreationPage';
import SubmissionViewPage from './pages/SubmissionViewPage'; 
import AuthGuard from './components/AuthGuard';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        
        <Route path="/public" element={<PublicPage />} />
        <Route path="/" element={
          <AuthGuard>
            <HomePage />
          </AuthGuard>
        } />
        <Route path="/activity-creation" element={
          <AuthGuard>
            <ActivityCreationPage />
          </AuthGuard>
        } />
        <Route path="/submission-view" element={
          <AuthGuard>
            <SubmissionViewPage />
          </AuthGuard>
        } />

      </Route>
    </Routes>
  );
};

export default App;