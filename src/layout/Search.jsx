import React from 'react'
import {BsSearch} from 'react-icons/bs'

const Search = () => {
  return (
    <div className='bg-secondary pb-5' style={{height:'400px'}}>
        <div className="textbox text-center pt-5">
            <h2 className='pt-5'>병원을 검색하세요</h2>
            <p className="pt-3">우리의 기가막힌 홈페이지를 통해 아주 쉽고 빠르게 김포의 병원을 조회하고 예약까지! 진행해보세요</p>
        </div>
        <div className="inputbox position-relative mt-5">
            <input type="search" placeholder='병원검색...' className='form-control'/>
            <button type="submit" className=" btn"><BsSearch className='sicon position-absolute'/></button>
        </div>
    </div>
  )
}

export default Search