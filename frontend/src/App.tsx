import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkspacePage from './routes/WorkspacePage';
import ProjectsPage from './routes/ProjectsPage';
import SettingsPage from './routes/SettingsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/workspace/:projectId" element={<WorkspacePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
