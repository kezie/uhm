import React from 'react'
import Slider from "react-slick";
import { testimonialSliderThree } from "../sliderProps";
import { TestimonialData } from './Data';
import avatar from '../../../images/avatar.png'

const Testimonials = () => {
  return (
    <section className="testimonial-section bg_cover"
      style={{ backgroundImage: "url(assets/images/bg/testimonial-bg1.png)" }}
      >
        <div className="container">
          {/*=== Testimonial Wrapper ===*/}
          <div className="testimonial-wrapper-two light-gray-bg wow fadeInUp">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title section-title-left border-bottom-1 mb-40 pb-20">
                  <span className="sub-title">Testimonials</span>
                  <h2 className='text-dark'>What Nigerians Say About us</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10">
                <Slider
                  {...testimonialSliderThree}
                  className="testimonial-slider-three"
                >
                  {TestimonialData.map((data)=>(
                    <div key={data.id} className="testimonial-item-two d-flex">
                      <div className="quote">
                        <i className="flaticon-left-quote-1" />
                      </div>
                      <div className="testimonial-content">
                        <p>
                          {data.text}
                        </p>
                        <div className="author-thumb-title d-flex">
                          <div className="author-thumb">
                            <img
                              src={avatar}
                              alt="Author"
                            />
                          </div>
                          <div className="author-title">
                            <h4>{data.author}</h4>
                            <p className="position">{data.position}</p>
                            <p className="position">{data.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="col-lg-2">
                <div className="testimonial-dots" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials