import React, {useEffect} from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../../../../styles/video.css'
import WOW from 'wowjs'
import { SlideData, settings } from './SlideData';
import ReactTyped from "react-typed";


const Hero = () => {

  useEffect(()=>{
    new WOW.WOW({
      live:false
    }).init()
  }, [])

  return (
    
      <Slider {...settings}>
        {SlideData.map((slide, index) => (
          <div key={index} className="hero">
            {slide.type === 'video' ? (
              <>
              <video autoPlay muted loop preload="auto" className="video-element">
                <source src={slide.content} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="color-overlay" style={{ backgroundColor: slide.colorOverlay}}></div>
              {/* <div className="text-overlay">
                <div className="">
                  <div className="hero-content">
                    
                    <h1 className="wow fadeInDown pt-5" data-wow-delay="1s">
                       Your Partner For 
                       {" "}
                    </h1>
                    <span style={{fontSize:12}}>
                        <ReactTyped
                          strings={["Developer", "Writer", "Designer"]}
                          typeSpeed={100}
                          loop
                          backSpeed={20}
                          cursorChar=">"
                          showCursor={true}
                        />
                      </span>
                    
                    <div
                      className="hero-button wow fadeInDown"
                      data-wow-delay=".9s"
                    >
                      <Link  href="/about">
                        <span className="main-btn btn-outline">Explore More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>  */}
            </>
            ) : (
              <>
              <div className="container mt-5">
                <div className="row align-items-center">
                  <div className="col-xl-7">
                    <div className="shape shape-blur animate-float-y">
                      <span />
                    </div>
                    <div className="hero-content">
                      <h1 className="wow fadeInDown" data-wow-delay=".5s">
                        <span>Health Insurance</span> Tailored For You
                      </h1>
                      <p className="wow fadeInUp" data-wow-delay=".7s">
                        Our goal is to improve the health and the well-being of Nigerians <br/>
                        by making health care accessible, affordable and equitable.
                      </p>
                      <div
                        className="hero-button wow fadeInDown mt-4"
                        data-wow-delay=".9s"
                      >
                        <Link  href="/about">
                          <span className="main-btn btn-outline">Explore More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="hero-img-box wow fadeInRight" data-wow-delay="1s">
                      <img src={slide.content} alt={`Slide ${index}`} className="image-element" />
                      <div className="circle-border">
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </>
            )}
          </div>
        ))}
      </Slider>
  );
};

export default Hero