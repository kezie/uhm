import Hero from '../../../../videos/hero.mp4'
export const SlideData = [
    {
      type: 'video',
      content: Hero,
      // caption: 'Video Caption 1',
      colorOverlay: 'rgba(0, 0, 0, 0.4)'
    }
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