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
import { Requests } from './views/Dashboard/Requests/requests';
import { MakeRequests } from './views/Dashboard/Requests/makeRequest';
import { ViewRequests } from './views/Dashboard/Requests/ViewRequests';
import ScrollToTop from './views/scrollToTop';
import { AcceptedReq } from './views/Dashboard/Requests/AcceptedReq';
import { PersonReq } from './views/Dashboard/Requests/PersonalReq';
import { HomePage } from './views/Homepage/landingPage';






function App() {

  let { authState, handleAuth } = useContext(UserContext)




  return (
    <React.Fragment>

      <Alert />
      <ScrollToTop/>
      <Routes>

        <Route path='/' element={<HomePage/>}></Route>

        <Route path='/login' element={<Login />}></Route>


        <Route path='sign-up' element={<Signup />}></Route>

        <Route path='change-password' element={<ChangePassword />}></Route>

        <Route path='reset-password/:id/:token' element={<ResetPassword />}></Route>

        <Route path='forgot-password' element={<ForgotPassword />}></Route>

        <Route path='dashboard' element={<Navbar />} >
          <Route index element={<Dashboard />}></Route>
          <Route path='profile/:id' element={<Profile />}></Route>
          <Route path='requests' element={<Requests/>}></Route>
          <Route path='create-a-request' element={<MakeRequests/>}></Route>
          <Route path="requests/:requestId" element={<ViewRequests/>}></Route>

          <Route path="accepted-requests" element={<AcceptedReq/>}></Route>
          <Route path="personal-requests" element={<PersonReq/>}></Route>
        </Route>

        <Route path='*' element={<Errorpage />}></Route>

      </Routes>

    </React.Fragment>
  );
}

export default App;
