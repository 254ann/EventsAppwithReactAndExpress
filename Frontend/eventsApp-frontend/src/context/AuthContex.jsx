import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = async () => {
      const res = await axios.get('/api/auth/check-auth');
      setUser(res.data.user || null);
    };
    checkLoggedIn();
  }, []);

  const login = async (email, password) => {
    const res = await axios.post('http://localhost:3000/api/auth/login', { email, password });
    setUser(res.data.user);
    navigate('/');
  };

  const register = async (username, email, password) => {
    const res = await axios.post('http://localhost:3000/api/auth/register', { username, email, password });
    setUser(res.data.user);
    navigate('/');
  };

  const logout = async () => {
    await axios.post('/api/auth/logout');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
