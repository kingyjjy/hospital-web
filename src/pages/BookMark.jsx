import React from 'react'
// import { Link } from 'react-router-dom'
import { BsBookmarkStarFill } from "react-icons/bs";

const BookMark = () => {
  return (
    <div className='container'>
        <div className="bookmark border-top pt-5">
            <h3 className="text-center fw-bold">즐겨찾기</h3>
            <div className="row m-4">
                <div className="col-3 border shadow-md rounded px-4 mx-5">
                    <div className="bmicon text-end"><BsBookmarkStarFill size={35}/></div>
                    <h4 className='ps-3'>굿모닝 내과</h4>
                    <div className="bmimg justify-content-center d-flex">
                        <img src="images/hp001.png" alt="hp" className='img-fluid' style={{height:'150px'}} />
                    </div>
                    <div className="hpaddress text-start px-3 my-3 text-sm">
                        <p>경기 김포시 김포한강4로 113 신한프라자 602호</p>
                    </div>
                </div>
                <div className="col-3 border shadow-md"></div>
                <div className="col-3 border shadow-md"></div>
                <div className="col-3 border shadow-md"></div>
            </div>
        </div>
        
    </div>
  )
}

export default BookMark