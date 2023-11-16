import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login';
import Register from './pages/Register';
import TopNav from './layout/TopNav';
import Footer from './layout/Footer';
import BookMark from './pages/BookMark';
import UserInfo from './pages/UserInfo';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' 
                element={
                  <>
                    <TopNav/>
                    <Register/>
                    <Footer/>
                  </>       
        }/>
        <Route path='/info' 
                element={
                  <>
                    <TopNav/>
                    <UserInfo/>
                    <Footer/>
                  </>
                }/>
        <Route path='/bookmark' 
                element={
                  <>
                    <TopNav/>
                    <BookMark/>
                    <Footer/>
                  </>
                }/>
      </Routes>
    </Router>
  )
}

export default App