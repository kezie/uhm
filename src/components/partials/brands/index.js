import React from 'react'
import { partnerSliderOne } from '../sliderProps'
import Slider from 'react-slick'
import Clients from './data'

const Brands = () => {
  return (
    <section className="partners-section pt-80">
        <div className="container">
            <h5 className='text-center mb-5'>We are <span style={{color:"#f87516"}}>Trusted</span> by leading brands</h5>
        <div className="partner-wrapper border-bottom-1 pb-60 wow fadeInDown">
            {/*=== Partner Slider ===*/}
            <Slider {...partnerSliderOne} className="partner-slider-one">
                {Clients.map((brand)=>(
                    <div className="partner-item" key={brand.id}>
                        <div className="partner-img">
                            <img src={`${brand.image}`} alt={`${brand.brand}`} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </div>
    </section>
  )
}

export default Brands