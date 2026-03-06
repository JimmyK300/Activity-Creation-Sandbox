import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import PublicPage from './pages/PublicPage';
<<<<<<< Auth-RoutingDomain
import ActivityCreationPage from './pages/ActivityCreationPage';
import SubmissionViewPage from './pages/SubmissionViewPage'; 
import AuthGuard from './components/AuthGuard';
import SignInModal from './components/SignInModal';

=======
import Activity from './pages/Activity';
>>>>>>> main
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignInModal />} />

      <Route element={<AppLayout />}>
        
        <Route path="/public" element={<PublicPage />} />
<<<<<<< Auth-RoutingDomain
        <Route element={<AuthGuard />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/activity-creation" element={<ActivityCreationPage />} />
          <Route path="/submission-view" element={<SubmissionViewPage />} />
        </Route>

=======
        <Route path="/activity/:id" element={<Activity/>}/>
>>>>>>> main
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;