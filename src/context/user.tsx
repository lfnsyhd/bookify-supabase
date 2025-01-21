"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContextTypes } from '../types/main';
import useGetProfile from '../hooks/useGetProfile';
import useRegister from '../hooks/useRegister';
import useLogin from '../hooks/useLogin';
import { useGeneralStore } from '../stores/general';

const UserContext = createContext<UserContextTypes | null | any>(null);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { resetGeneralStore } = useGeneralStore();
  const navigate = useNavigate();
  
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const checkUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return

      const profile = await useGetProfile(token);
      if (!profile?.user) return;

      setUser(profile?.user);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => { checkUser() }, []);

  const register = async (name: string, email: string, password: string, role: string) => {

    try {
      await useRegister(name, email, password, role);
      await login(email, password);
      await checkUser();
    } catch (error) {
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { token } = await useLogin(email, password);
      localStorage.setItem('token', token);

      checkUser();
    } catch (error: any) {
      throw error;
    }
  };

  const logout = () => {
    try {
      resetGeneralStore();
      localStorage.clear();
      sessionStorage.clear();

      setUser(null);
      navigate('/login');
    } catch (error) {
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout, checkUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(UserContext)