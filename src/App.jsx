// App.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './components/LoginPage';
import AdministrationPage from './components/AdministrationPage';

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <>
      {isLoggedIn ? <AdministrationPage /> : <LoginPage />}
    </>
  );
}

export default App;
