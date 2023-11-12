import React from 'react'
import { useNavigate, Link, Routes, Route } from 'react-router-dom'

const Category = () => {
  return (
    <div className="container mt-5">
        <h2 className='text-center mb-5'>진료과 찾기</h2>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">All</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="medicine-tab" data-bs-toggle="tab" data-bs-target="#medicine" type="button" role="tab" aria-controls="medicine" aria-selected="false">내과</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">안과</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">피부과</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">외과</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">정형외과</button>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
            <div className="row">
                <div className="col-4">
                    <ul>
                        <li>굿모닝 내과</li>
                        <li>삼성탑내과의원</li>
                        <li>아산내과의원</li>
                        <li>퍼스트내과의원</li>
                        <li>황산내과의원</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li>굿모닝 내과</li>
                        <li>삼성탑내과의원</li>
                        <li>아산내과의원</li>
                        <li>퍼스트내과의원</li>
                        <li>황산내과의원</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li>굿모닝 내과</li>
                        <li>삼성탑내과의원</li>
                        <li>아산내과의원</li>
                        <li>퍼스트내과의원</li>
                        <li>황산내과의원</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="tab-pane fade" id="medicine" role="tabpanel" aria-labelledby="medicine-tab">
            <div className="row">
                <div className="col-4">
                    <ul>
                        <li>내과정보들을</li>
                        <li>넣을 예정입니다.</li>
                        <li>데이터를</li>
                        <li>모아아해서</li>
                        <li>이건 나중에 함</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li>내과정보들을</li>
                        <li>넣을 예정입니다.</li>
                        <li>데이터를</li>
                        <li>모아아해서</li>
                        <li>이건 나중에 함</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li>내과정보들을</li>
                        <li>넣을 예정입니다.</li>
                        <li>데이터를</li>
                        <li>모아아해서</li>
                        <li>이건 나중에 함</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div className="row">
                <div className="col-4">
                    <ul>
                        <li>내과정보들을</li>
                        <li>넣을 예정입니다.</li>
                        <li>데이터를</li>
                        <li>모아아해서</li>
                        <li>이건 나중에 함</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li>내과정보들을</li>
                        <li>넣을 예정입니다.</li>
                        <li>데이터를</li>
                        <li>모아아해서</li>
                        <li>이건 나중에 함</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li>내과정보들을</li>
                        <li>넣을 예정입니다.</li>
                        <li>데이터를</li>
                        <li>모아아해서</li>
                        <li>이건 나중에 함</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>   
    </div>
  )
}

export default Category