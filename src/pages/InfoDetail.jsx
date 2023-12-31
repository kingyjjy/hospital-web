import React , {useState}from 'react'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { BiTimeFive } from 'react-icons/bi'
import MapContainer from '../components/MapContainer'
import { Link } from 'react-router-dom'
import { IoBookmarksOutline } from 'react-icons/io5'

const InfoDetail = () => {
  return (
    <>
        <div className="container">
            <div className="section">
                <div className="detail-title mt-5">
                    <h1>병원 상세</h1>
                </div>
                <div className="row hos-detail">
                    <div className="col-4 detail-img mt-5">
                        <img src='images/hospital.jpg' alt='hospital' style={{width:"350px", height:"350px"}}/>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-7 mt-5">
                        <div className="detail-box">
                            <h1 className='mb-5'>굿모닝 내과 의원<span className='p-2'><a href="/bookmark"><IoBookmarksOutline size={24}/></a></span></h1>
                            <p><span>주소 : </span>경기 김포시 김포한강4로 113 신한프라자 602호</p>
                            <p className='mb-5'><span>대표번호 : </span>031-1234-1234</p>
                        </div>
                        <div className="time-box d-flex">
                            <div className="col-8">    
                                <p className='time-text'><span className='time'><BiTimeFive size={24}/></span>진료 시간</p>
                                <p><span>평일 : </span>08 : 30 ~ 19 : 00</p>
                                <p><span>토요일 : </span>09 : 00 ~ 13 : 00</p>
                                <p><span className='text-danger'>일요일 및 공휴일</span> 휴진</p>
                            </div>
                            <div className="col-4">
                                <div className="detail-reservation">
                                    <button className='reserv-btn'><Link to="/reservation">예약하기</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-transport mt-5">
                    <div className="subway">
                        <h1><span><HiOutlineLocationMarker/></span>지하철 이용시</h1>
                        <p className='mt-4'>김포 골드라인 장기역 3번 출구에서 632m</p>
                    </div>
                    <div className="bus">
                        <h1><span><HiOutlineLocationMarker/></span>버스 이용시</h1>
                        <p className='mt-4'>장기역.김포고용복지플러스센터 35-508</p>
                        <div className="seat">
                            <ul>
                                <li>일반 : 4-1, 8-1, 60-3, 81-1</li>
                                <li>마을 : 30-1, 30-1A, 36, 한강이음2-1</li>
                                <li>좌석 : 22</li>
                                <li>직행 : 8000, 8600, 9008, G6000, G6001</li>
                            </ul>
                        </div>
                    </div>
                    <div className="parking">
                        <h1><span><HiOutlineLocationMarker/></span>주차장 이용 안내</h1>
                        <div className="park-list mt-3">
                            <ul>
                                <li>건물 뒤 옥상 주차장</li>
                                <li>장기 1 공영주차장</li>
                                <li>장기 2 공영주차장</li>
                            </ul>
                            <p className='text-danger'>공영 주차장 이용 시 주차권 배부해드립니다!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map mb-5">
                <MapContainer/>
            </div>
        </div>
    </>
  )
}

export default InfoDetail