import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/common/MainPage';
import MainLayout from './components/common/Layout/MainLayout';
import OwnerPage from './pages/deploy/OwnerPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/SignupPage';
import { AuthProvider } from './hooks/useAuth';
import PrivateRoute from './pages/auth/PrivateRoute';
import PodDetailPage from './pages/deploy/PodDetailPage';
import TemplatePage from './pages/deploy/TemplatePage';
import ConcertDeployPage from './pages/deploy/ConcertDeployPage';
import PlayDetailPage from './pages/deploy/PlayDetailPage';
import PlayDetailLayout from './components/common/Layout/PlayDetailLayout';
import PlayMonitorPage from './pages/deploy/PlayMonitorPage';
import ServerMonitorPage from './pages/deploy/ServerMonitorPage';
import PlayConfigurationPage from './pages/deploy/PlayConfigurationPage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />

            {/* Need Authentication */}
            <Route element={<PrivateRoute />}>
              {/* Deployment */}
              <Route path="/owner" element={<OwnerPage />} />
              <Route path="/owner/deploy" element={<TemplatePage />} />

              {/* Deployment Template */}
              <Route path="/owner/deploy/concert" element={<ConcertDeployPage />} />
              <Route path="/owner/deploy/sports" element={<ConcertDeployPage />} />
              <Route path="/owner/deploy/exhibition" element={<ConcertDeployPage />} />

              <Route path="/owner/podDetail/:podName" element={<PodDetailPage />} />

              {/* Play Detail */}
              <Route element={<PlayDetailLayout />}>
                <Route path="/owner/playDetail/:pid" element={<PlayDetailPage />} />
                <Route path="/owner/playMonitor/:pid" element={<PlayMonitorPage />} />
                <Route path="/owner/serverMonitor/:pid" element={<ServerMonitorPage />} />
                <Route path="/owner/playConfiguration/:pid" element={<PlayConfigurationPage />} />
              </Route>
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
