import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

const InfoCard = (props) => {
            return (
                    <SplideSlide> 
                        <div className='card info-card max-w-sm relative overflow-hidden'>
                            <img className='card-img' src={props.img} alt={props.title}/>
                            <div className='px-6'>
                                <p className='card-title px-2 pt-2 font-bold text-xl mb-3 truncate'>
                                    {props.title}
                                </p>
                                <p className='card-text px-2 pb-3'>{props.content}</p>
                                <div className='flex justify-between align-middle'>
                                    <div className="card-btn mb-5">
                                        <a href='#' className='btn border mt-2 py-2 px-4'>click!</a>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </SplideSlide>
  )
}
export default InfoCard