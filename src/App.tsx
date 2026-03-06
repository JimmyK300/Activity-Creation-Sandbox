import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import PublicPage from './pages/PublicPage';
import ActivityCreationPage from './pages/ActivityCreationPage';
import SubmissionViewPage from './pages/SubmissionViewPage';
import AuthGuard from './components/AuthGuard';
import SignInModal from './components/SignInModal';
import Activity from './pages/Activity';
import SubmissionPage from './pages/Submission';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignInModal />} />

      <Route element={<AppLayout />}>
        <Route element={<AuthGuard />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/activity-creation" element={<ActivityCreationPage />} />
          <Route path="/submission-view" element={<SubmissionViewPage />} />
          <Route path="/submission" element={<SubmissionPage />}/>
        </Route>

        <Route path="/public" element={<PublicPage />} />
        <Route path="/activity/:id" element={<Activity />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
