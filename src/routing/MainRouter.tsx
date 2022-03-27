import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from 'app/auth/login/Login';
import { Logout } from 'app/auth/logout/Logout';
import { Main } from 'app/main/Main';

import { ProtectedRoute } from './ProtectedRoute';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/logout"
        element={
          <ProtectedRoute>
            <Logout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
