export const partnerSliderOne = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

export const testimonialSliderThree = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // appendDots: (dots) => (
  //   <div className="w-100">
  //     <div className="testimonial-dots">
  //       <ul className="slick-dots">{dots}</ul>
  //     </div>
  //   </div>
  // ),
  responsive: [
    {
      breakpoint: 991,
      settings: {
        dots: false,
      },
    },
  ],
};

export const videoSlider = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 700,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};
