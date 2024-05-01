import React from 'react';
import { NativeRouter as Router, Routes, Route } from 'react-router-native';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
