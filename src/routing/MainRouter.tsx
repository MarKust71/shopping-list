import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from 'app/auth/login/Login';
import { Logout } from 'app/auth/logout/Logout';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};
