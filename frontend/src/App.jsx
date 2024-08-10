import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';
import About from './pages/About';
import Account from './pages/Account';
import { UserData } from './context/UserContext';
import Loading from './components/Loading';
import Courses from './pages/Courses';
import CourseDescription from './pages/CourseDescription';
import PaymentSuccesful from './pages/PaymentSuccesful';
import Dashboard from './pages/Dashboard';

function App() {

  const {isAuth, user, loading} = UserData();
  return (
    <>
    {loading?(<Loading/>):(<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={isAuth ?<Home/>:<Login/>}/>
        <Route path="/signup" element={isAuth ?<Home/>:<Register/>}/>
        <Route path="/account" element={isAuth ? <Account user={user}/> : <Login/>}/>
        <Route path="/verify" element={isAuth ?<Home/>:<Verify/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/course/:id" element={isAuth?<CourseDescription user={user}/>:<Login/>}/>
        <Route
              path="/payment-success/:id"
              element={isAuth ? <PaymentSuccesful user={user}/> : <Login />}
            />
        <Route
              path="/:id/dashboard"
              element={isAuth ? <Dashboard user={user}/> : <Login />}
            />
      </Routes>
      
    </BrowserRouter>)}
      
    </>
  )
}

export default App