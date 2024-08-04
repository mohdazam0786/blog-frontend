import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import BlogList from './components/Blog/BlogList';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/" element={<div><h1>Welcome to the Blog Application</h1></div>} />
        </Routes>
    </Router>
  );
}

export default App;
