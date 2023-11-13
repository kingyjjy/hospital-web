import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const TopNav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-md">
            <div className="container">
                <a href='/' className='col-4 link'>
                    <img src="images/logo.png" alt="" />
                </a>
                <button type="button" className="btn navbar-toggler" data-bs-toggle='collapse' data-bs-target='#topnav'>
                    <GiHamburgerMenu size={30}/> 
                </button>
                <div className='collapse navbar-collapse my-3' id='topnav'>
                    <ul className="navbar-nav col-10">
                        <li className="nav-item mx-4"><a href="#" className='nav-link'>Nav</a></li>
                        <li className="nav-item mx-4"><a href="#" className='nav-link'>Nav</a></li>
                        <li className="nav-item mx-4"><a href="#" className='nav-link'>Nav</a></li>
                        <li className="nav-item mx-4"><a href="#" className=' nav-link'>마이 페이지</a></li>
                    </ul>
                    <div className='col-3'>
                        <a href="#" className='link btn btn-outline-dark'>로그인</a>  
                        <a href="#" className='link btn btn-outline-dark mx-2'>회원가입</a>
                    </div>

                </div>
                
                
            </div>
        </nav>
    </>
  )
}

export default TopNav