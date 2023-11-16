import React from 'react'
import { Splide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import { healthyInfo } from '../data/data';
import InfoCard from '../card/InfoCard';

const Info = () => {
  return (
    <>
        <div className="container info mt-5 mb-5">
        <h2 className='text-center mt-3'>건강정보</h2>
        <p className='text-center mb-5'>오늘의 건강정보를 확인해보세요!</p>       
        <div className="row">          
            <div>
            <Splide
                    options={{
                        perPage: 3,
                        gap : "1rem",
                        grag:"free",
                        arrow:false
                    }}
                >
                { healthyInfo.map((item) => {
                    return(
                        <InfoCard key={item.id} img={item.img} id={item.id} title={item.title} content={item.content} />
                    )
                })}
                </Splide>
            </div>
        </div>
    </div>
    </>
  
  )
}

export default Info