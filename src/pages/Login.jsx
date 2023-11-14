import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {SiKakaotalk, SiFacebook} from 'react-icons/si'
const Login = () => {
  return (
    <form>
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="bg-white my-5 mx-auto border shadow-lg" style={{borderRadius:'1rem', maxWidth:'500px'}}>
              <div className="d-flex justify-content-between pt-4 px-5">
                LOGO
                <div className="text-end"><button type="button" className="btn btn-close"></button></div>
              </div>
              <div className="p-5 w-100 d-flex flex-column">
                
                <h2 className="fw-bold mb-5 text-center">로그인</h2>
                <div className="mx-5 mb-3">
                  <label htmlFor="id">아이디</label>
                  <input type="text" name="userid" id="userid" className="form-control" placeholder='아이디'/>
                </div>
                <div className="mx-5">
                  <label htmlFor="pass">비밀번호</label>
                  <input type="password" name="userpass" id="userpass" className="form-control" placeholder='비밀번호'/>
                </div>
                <div className="form-check mx-5 mt-3">
                  <input type="checkbox" id="idcheck" className="form-check-input" />
                  <label htmlFor="idcheck">아이디 기억하기</label>
                </div>
                <a href="/register" className="text-end mx-5">회원가입</a>
                <div className='d-flex justify-content-center mt-3'>
                  <button type="submit" className="btn btn-secondary">로그인</button>
                </div>
                <hr />
                <p className="text-center">Sign in with :</p>
                <div className="d-flex justify-content-between mx-5">
                  <a href=""><FcGoogle size={30}/></a>
                  <a href=""><SiKakaotalk size={30} color='yellow'/></a>
                  <a href=""><SiFacebook size={30} color='darkblue'/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login