import React from 'react'
import {GiHamburgerMenu,GiHearts} from 'react-icons/gi'
import {GrUser,GrUserManager,GrBook,GrUserSettings} from 'react-icons/gr'

const TopNav = () => {
  return (
    <>  
        <nav className="navbar navbar-expand-md">
            <div className="container">
                <button type='button' className='btn' data-bs-toggle='offcanvas' data-bs-target='#sidenav'><GrUser/></button>
                <a href='#' className='col-3 link'>LOGO</a>
                <button type="button" className="btn navbar-toggler" data-bs-toggle='collapse' data-bs-target='#topnav'>
                    <GiHamburgerMenu size={30}/> 
                </button>
                <div className='collapse navbar-collapse my-3' id='topnav'>
                    <ul className="navbar-nav col-10">
                        <li className="nav-item dropdown mx-4">
                            <a href="#" className='nav-link dropdown-toggle' id='linktoggle' role='button' data-bs-toggle='dropdown' aria-expanded='false'>지역찾기</a>
                            <div className="dropdown-menu container" aria-labelledby='linktoggle' style={{width:'600px'}}>
                                <div className="row m-3">
                                    <div className="col-4">
                                        ㄱ<hr/>
                                        <a href="#" className="dropdown-item">감정동</a>
                                        <a href="#" className="dropdown-item">걸포동</a>
                                        <a href="#" className="dropdown-item">고촌읍</a>
                                        <a href="#" className="dropdown-item mb-3">구래동</a>
                                        ㄷ<hr />
                                        <a href="#" className="dropdown-item mb-3">대곶면</a>
                                        ㅁ<hr />
                                        <a href="#" className="dropdown-item">마산동</a>
                                    </div>
                                    <div className="col-4">
                                        ㅂ<hr />
                                        <a href="#" className="dropdown-item mb-3">북변동</a>
                                        ㅅ<hr />
                                        <a href="#" className="dropdown-item mb-3">사우동</a>
                                        ㅇ<hr />
                                        <a href="#" className="dropdown-item">양촌읍</a>
                                        <a href="#" className="dropdown-item">운양동</a>
                                        <a href="#" className="dropdown-item">월곶면</a>
                                    </div>
                                    <div className="col-4">
                                        ㅈ<hr />
                                        <a href="#" className="dropdown-item mb-3">장기동</a>
                                        ㅌ<hr />
                                        <a href="#" className="dropdown-item mb-3">통진읍</a>
                                        ㅍ<hr />
                                        <a href="#" className="dropdown-item mb-3">풍무동</a>
                                        ㅎ<hr />
                                        <a href="#" className="dropdown-item">하성면</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown mx-4">
                            <a href="#" className='nav-link dropdown-toggle' id='linktoggle' role='button' data-bs-toggle='dropdown' aria-expanded='false'>진료과</a>
                            <div className="dropdown-menu container" aria-labelledby='linktoggle' style={{width:'700px'}}>
                                <div className="row m-3">
                                    <div className="col-3">
                                        <a href="#" className="dropdown-item">가정의학과</a>
                                        <a href="#" className="dropdown-item">내과</a>
                                        <a href="#" className="dropdown-item">마취통증의학</a>
                                        <a href="#" className="dropdown-item">방사선종양학과</a>
                                        <a href="#" className="dropdown-item">병리과</a>
                                        <a href="#" className="dropdown-item">비뇨의학과</a>
                                        <a href="#" className="dropdown-item">산부인과</a>   
                                    </div>
                                    <div className="col-3">
                                        <a href="#" className="dropdown-item">산업의학과</a>
                                        <a href="#" className="dropdown-item">성형외과</a>
                                        <a href="#" className="dropdown-item">소아청소년과</a>
                                        <a href="#" className="dropdown-item">신경과</a>
                                        <a href="#" className="dropdown-item">신경외과</a>
                                        <a href="#" className="dropdown-item">안과</a>
                                        <a href="#" className="dropdown-item">영상의학과</a>
                                    </div>
                                    <div className="col-3">
                                        <a href="#" className="dropdown-item">예방의학과</a>
                                        <a href="#" className="dropdown-item">외과</a>
                                        <a href="#" className="dropdown-item">응급의학과</a>
                                        <a href="#" className="dropdown-item">이비인후과</a>
                                        <a href="#" className="dropdown-item">재활의학과</a>
                                        <a href="#" className="dropdown-item">정신건강의학과</a>
                                        <a href="#" className="dropdown-item">정형외과</a>
                                    </div>
                                    <div className="col-3">
                                        <a href="#" className="dropdown-item">직업환경의학과</a> 
                                        <a href="#" className="dropdown-item">진단검사의학과</a>
                                        <a href="#" className="dropdown-item">치과</a>
                                        <a href="#" className="dropdown-item">피부과</a>
                                        <a href="#" className="dropdown-item">한방과</a>
                                        <a href="#" className="dropdown-item">핵의학과</a>
                                        <a href="#" className="dropdown-item">흉부외과</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item mx-4"><a href="/health" className='nav-link'>건강정보</a></li>
                        <li className="nav-item mx-4"><a href="#" className=' nav-link'>서비스안내</a></li>
                    </ul>
                    <div className='col-3'>
                        <a href="/login" className='link btn btn-outline-dark'>로그인</a>  
                        <a href="/register" className='link btn btn-outline-dark mx-2'>회원가입</a>
                    </div>
                </div>  
            </div>
        </nav>
        {/* sidebar */}
        <div className="offcanvas offcanvas-end border-end" id="sidenav" data-bs-backdrop='static' tabIndex={-1} style={{width:'22%'}}>
            <div className="offcanvas-header border-bottom bg-light" >
                <h5 className='offcanvas-title'>MyPage</h5>
                <button type="button" className="btn-close" data-bs-dismiss='offcanvas' aria-label='close'></button>
            </div>
            <div className="offcanvas-body">
                <div className="infobox border-bottom d-flex bg-white ms-4 pb-1">
                    <div className="rounded-circle border mt-4 text-center" style={{width:'50px', height:'50px', lineHeight:'40px'}}>
                        <GrUserManager size={35}/>
                    </div>
                    <div className="info-textbox ms-4 mt-3 pe-2 text-start" id='myinfo-media'>
                        <h5 className='fw-bold'>Username</h5>
                        <span>useremail@example.com</span>
                        <p className='pt-2 text-end'><a href="/logout" className='link-dark'>logout</a></p>
                    </div> 
                </div>
                <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action list-group-item-light p-3"><GrUserSettings className='me-2'/> 내 정보</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-light p-3"><GiHearts className='me-2'/> 즐겨찾기</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-light p-3"><GrBook className='me-2'/> 예약내역</a>
                </div>
            </div>
            
        </div>
        {/* /sidebar */}
    </>
  )
}

export default TopNav