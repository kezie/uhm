import Video from '../../../../videos/hero.mp4'
import Hero1 from '../../../../videos/hero2.mp4'


export const SlideData = [
    {
      type: 'video',
      content: Hero1,
      caption: 'Video Caption 1',
      colorOverlay: 'rgba(0, 0, 0, 0.5)'
    },
    // {
    //   type: 'image',
    //   content: Hero1,
    //   caption: 'Image Caption 1',
    //   colorOverlay: ''
    // }
  ];

export const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed:5000
  };