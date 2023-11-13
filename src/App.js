import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import InfoDetail from './pages/InfoDetail';
import TopNav from './layout/TopNav';
import Footer from './layout/Footer';
import ReservList from './pages/ReservList';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/detail' element={
          <>
            <TopNav/>
            <InfoDetail/>
            <Footer/>
          </>
        }/>
        <Route path='/reserv-list' element={
          <>
            <TopNav/>
            <ReservList/>
            <Footer/>
          </>
        }/>
      </Routes>
    </Router>
  )
}

export default App