import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';

const Navigation = () => {
  const location = useLocation(); // 現在のパスを取得

  return (
    <nav>
      <ul>
        {location.pathname === "/signup" && (
          <li><Link to="/login">ログインへ</Link></li>
        )}
        {location.pathname === "/login" && (
          <li><Link to="/signup">サインアップへ</Link></li>
        )}
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/signup" />} />
        <Route path="/signup" element={<><Signup /><Navigation /></>} />
        <Route path="/login" element={<><Login /><Navigation /></>} />
      </Routes>
    </Router>
  );
};

export default App;
