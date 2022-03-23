import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from 'app/auth/login/Login';
import { Logout } from 'app/auth/logout/Logout';
import { useAuthenticationContext } from 'hooks/useAuthenticationContext/useAuthenticationContext';
import { Main } from 'app/main/Main';

export const MainRouter = () => {
  const { currentUser } = useAuthenticationContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={currentUser ? <Main /> : <Login />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};
