import React from 'react'
import {BsSearch} from 'react-icons/bs'

const Search = () => {
  return (
    <div className='bg-secondary pb-5'>
        <div className="textbox text-center">
            <h1 className='pt-5'>병원을 검색하세요</h1>
        </div>
        <div className="inputbox position-relative mt-5">
            <input type="search" placeholder='병원검색...' className='form-control'/>
            <button type="submit" className=" btn"><BsSearch className='sicon position-absolute'/></button>
        </div>
    </div>
  )
}

export default Search