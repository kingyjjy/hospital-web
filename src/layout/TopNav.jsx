import React from 'react'
import {GiHamburgerMenu,GiHearts} from 'react-icons/gi'
import {GrUser,GrUserManager,GrBook,GrUserSettings} from 'react-icons/gr'
import { Link } from 'react-router-dom'


const TopNav = () => {
  return (
    <>  
        <nav className="navbar navbar-expand-md">
            <div className="container">
                <button type='button' className='btn' data-bs-toggle='offcanvas' data-bs-target='#sidenav'><GrUser/></button>
                <Link to='/' className='col-3 link'>LOGO</Link>
                <button type="button" className="btn navbar-toggler" data-bs-toggle='collapse' data-bs-target='#topnav'>
                    <GiHamburgerMenu size={30}/> 
                </button>
                <div className='collapse navbar-collapse my-3' id='topnav'>
                    <ul className="navbar-nav col-10">
                        <li className="nav-item dropdown mx-4">
                            <Link to="#" className='nav-link dropdown-toggle' id='linktoggle' role='button' data-bs-toggle='dropdown' aria-expanded='false'>지역찾기</Link>
                            <div className="dropdown-menu container" aria-labelledby='linktoggle' style={{width:'600px'}}>
                                <div className="row m-3">
                                    <div className="col-4">
                                        ㄱ<hr/>
                                        <Link to="#" className="dropdown-item">감정동</Link>
                                        <Link to="#" className="dropdown-item">걸포동</Link>
                                        <Link to="#" className="dropdown-item">고촌읍</Link>
                                        <Link to="#" className="dropdown-item mb-3">구래동</Link>
                                        ㄷ<hr />
                                        <Link to="#" className="dropdown-item mb-3">대곶면</Link>
                                        ㅁ<hr />
                                        <Link to="#" className="dropdown-item">마산동</Link>
                                    </div>
                                    <div className="col-4">
                                        ㅂ<hr />
                                        <Link to="#" className="dropdown-item mb-3">북변동</Link>
                                        ㅅ<hr />
                                        <Link to="#" className="dropdown-item mb-3">사우동</Link>
                                        ㅇ<hr />
                                        <Link to="#" className="dropdown-item">양촌읍</Link>
                                        <Link to="#" className="dropdown-item">운양동</Link>
                                        <Link to="#" className="dropdown-item">월곶면</Link>
                                    </div>
                                    <div className="col-4">
                                        ㅈ<hr />
                                        <Link to="#" className="dropdown-item mb-3">장기동</Link>
                                        ㅌ<hr />
                                        <Link to="#" className="dropdown-item mb-3">통진읍</Link>
                                        ㅍ<hr />
                                        <Link to="#" className="dropdown-item mb-3">풍무동</Link>
                                        ㅎ<hr />
                                        <Link to="#" className="dropdown-item">하성면</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown mx-4">
                            <Link to="#" className='nav-link dropdown-toggle' id='linktoggle' role='button' data-bs-toggle='dropdown' aria-expanded='false'>진료과</Link>
                            <div className="dropdown-menu container" aria-labelledby='linktoggle' style={{width:'700px'}}>
                                <div className="row m-3">
                                    <div className="col-3">
                                        <Link to="#" className="dropdown-item">가정의학과</Link>
                                        <Link to="#" className="dropdown-item">내과</Link>
                                        <Link to="#" className="dropdown-item">마취통증의학</Link>
                                        <Link to="#" className="dropdown-item">방사선종양학과</Link>
                                        <Link to="#" className="dropdown-item">병리과</Link>
                                        <Link to="#" className="dropdown-item">비뇨의학과</Link>
                                        <Link to="#" className="dropdown-item">산부인과</Link>   
                                    </div>
                                    <div className="col-3">
                                        <Link to="#" className="dropdown-item">산업의학과</Link>
                                        <Link to="#" className="dropdown-item">성형외과</Link>
                                        <Link to="#" className="dropdown-item">소아청소년과</Link>
                                        <Link to="#" className="dropdown-item">신경과</Link>
                                        <Link to="#" className="dropdown-item">신경외과</Link>
                                        <Link to="#" className="dropdown-item">안과</Link>
                                        <Link to="#" className="dropdown-item">영상의학과</Link>
                                    </div>
                                    <div className="col-3">
                                        <Link to="#" className="dropdown-item">예방의학과</Link>
                                        <Link to="#" className="dropdown-item">외과</Link>
                                        <Link to="#" className="dropdown-item">응급의학과</Link>
                                        <Link to="#" className="dropdown-item">이비인후과</Link>
                                        <Link to="#" className="dropdown-item">재활의학과</Link>
                                        <Link to="#" className="dropdown-item">정신건강의학과</Link>
                                        <Link to="#" className="dropdown-item">정형외과</Link>
                                    </div>
                                    <div className="col-3">
                                        <Link to="#" className="dropdown-item">직업환경의학과</Link> 
                                        <Link to="#" className="dropdown-item">진단검사의학과</Link>
                                        <Link to="#" className="dropdown-item">치과</Link>
                                        <Link to="#" className="dropdown-item">피부과</Link>
                                        <Link to="#" className="dropdown-item">한방과</Link>
                                        <Link to="#" className="dropdown-item">핵의학과</Link>
                                        <Link to="#" className="dropdown-item">흉부외과</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item mx-4"><Link to="/health" className='nav-link'>건강정보</Link></li>
                        <li className="nav-item mx-4"><Link to="#" className=' nav-link'>서비스안내</Link></li>
                    </ul>
                    <div className='col-3'>
                        <Link to="/login" className='link btn btn-outline-dark'>로그인</Link>  
                        <Link to="/register" className='link btn btn-outline-dark mx-2'>회원가입</Link>
                    </div>
                </div>  
            </div>
        </nav>
         {/* sidebar */}
         <div className="sidenav offcanvas offcanvas-end border-end" id="sidenav" data-bs-backdrop='static'  tabIndex={-1} style={{width:'22%'}}>
            <div className="offcanvas-header border-bottom bg-light" >
                <h5 className='offcanvas-title'>MyPage</h5>
                <button type="button" className="btn-close" data-bs-dismiss='offcanvas' aria-label='close'></button>
            </div>
            <div className="offcanvas-body">
                
                <div className="list-group list-group-flush">

                    <div className="infobox list-group-item list-group-item-action list-group-item-white border-bottom d-flex bg-white ms-2 pb-3">
                        <div className="rounded-circle border mt-4 text-center" style={{width:'50px', height:'50px', lineHeight:'40px'}}>
                            <GrUserManager size={35}/>
                        </div>
                        <div className="info-textbox ms-4 my-3 pe-2 text-start" id='myinfo-media'>
                            <h5 className='fw-bold'>Username</h5>
                            <span>useremail@example.com</span>
                        </div> 
                    </div>

                    <Link to="/info" className="list-group-item list-group-item-action list-group-item-light p-3"><GrUserSettings className='me-2'/> 내 정보</Link>
                    <Link to="/bookmark" className="list-group-item list-group-item-action list-group-item-light p-3"><GiHearts className='me-2'/> 즐겨찾기</Link>
                    <Link to="#" className="list-group-item list-group-item-action list-group-item-light p-3"><GrBook className='me-2'/> 예약내역</Link>
                    <p className='pt-2 text-end'><Link to="/logout" className='link-dark'>logout</Link></p>
                </div>
            </div>
            
        </div>
        {/* /sidebar */}
    </>
  )
}

export default TopNav