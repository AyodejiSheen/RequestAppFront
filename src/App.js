import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { Navbar } from './views/navbar';
import { Dashboard } from './views/Dashboard/dashboard';
import UIState from './context/UI/state';
import { Login } from './views/login';
import { Signup } from './views/signup';
import { ChangePassword } from './views/changePassword';
import { ResetPassword } from './views/resetPassword';
import UIContext from './context/UI/context';
import UserContext from './context/user/context';
import { ForgotPassword } from './views/forgotPassword';
import { Alert } from './views/alert';
import { Errorpage } from './views/404';
import { Profile } from './views/Dashboard/Profile/profile';






function App() {

  let { authState, handleAuth } = useContext(UserContext)




  return (
    <React.Fragment>

      <Alert />
      <Routes>

        <Route path='/' element={<Login />}></Route>


        <Route path='sign-up' element={<Signup />}></Route>

        <Route path='change-password' element={<ChangePassword />}></Route>

        <Route path='reset-password/:id/:token' element={<ResetPassword />}></Route>

        <Route path='forgot-password' element={<ForgotPassword />}></Route>

        <Route path='dashboard/' element={<Navbar />} >
          <Route index element={<Dashboard />}></Route>
          <Route path='profile' element={<Profile />}></Route>
        </Route>

        <Route path='*' element={<Errorpage />}></Route>

      </Routes>

    </React.Fragment>
  );
}

export default App;
