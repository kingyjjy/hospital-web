import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBookmarksFill } from 'react-icons/bs'

const BookMark = () => {
  return (
    <div className="container">
        <div className="bookmark">
            <h1 className="bookmark-title">즐겨찾기</h1>
                <div className="bookmark-box border">
                    
                    {/* <div className="col-4 mark-list d-flex border">
                        <div className="col-9 mark-box">
                            <div className="mark-title">
                                <h4>굿모닝 내과</h4>
                            </div>
                            <div className="list-address">
                                <p>경기 김포시 김포한강4로 113 신한프라자 602호</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <BsFillBookmarksFill size={40} color='#0c029b' className='mark-icon'/>
                        </div>
                    </div> */}
                </div>             
        </div>
    </div>
  )
}

export default BookMark