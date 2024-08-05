import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/common/MainPage';
import MainLayout from './components/common/Layout/MainLayout';
import OwnerPage from './pages/OwnerPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/SignupPage';
import { AuthProvider } from './hooks/useAuth';
import PrivateRoute from './pages/auth/PrivateRoute';
import TemplatePage from './pages/TemplatePage';
import ConcertDeployPage from './pages/deploy/ConcertDeployPage';
import PlayDetailPage from './pages/PlayDetailPage';
import PlayMonitorPage from './pages/deploy/PlayMonitorPage';
import ServerMonitorPage from './pages/deploy/ServerMonitorPage';
import PlayConfigurationPage from './pages/PlayConfigurationPage';
import PlayDetailTicketingPage from './pages/ticketing/PlayDetailTicketingPage';
import PlayTicketingPage from './pages/ticketing/PlayTicketingPage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/play/:pid" element={<PlayDetailTicketingPage />} />

            {/* Need Authentication */}
            <Route element={<PrivateRoute />}>
              {/* Deployment */}
              <Route path="/owner" element={<OwnerPage />} />
              <Route path="/owner/deploy" element={<TemplatePage />} />

              {/* Deployment Template */}
              <Route path="/owner/deploy/concert" element={<ConcertDeployPage />} />
              <Route path="/owner/deploy/sports" element={<ConcertDeployPage />} />
              <Route path="/owner/deploy/exhibition" element={<ConcertDeployPage />} />

              {/* Play Detail (seller) */}
              <Route path="/owner/playDetail/:pid" element={<PlayDetailPage />} />
              <Route path="/owner/playMonitor/:pid" element={<PlayMonitorPage />} />
              <Route path="/owner/serverMonitor/:pid" element={<ServerMonitorPage />} />
              <Route path="/owner/playConfiguration/:pid" element={<PlayConfigurationPage />} />

              {/* Play Ticketing */}
              <Route path="/play/:pid/ticketing" element={<PlayTicketingPage />} />
            </Route>
          </Route>
          {/* Authentication */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
