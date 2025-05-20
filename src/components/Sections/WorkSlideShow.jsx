import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { type: "image", src: "https://res.cloudinary.com/dobirrdcu/image/upload/v1743154901/Before_llbujz.png" },
  { type: "image", src: "https://res.cloudinary.com/dobirrdcu/image/upload/v1743156727/Before_3_o607de.png" },
  { type: "image", src: "https://res.cloudinary.com/dobirrdcu/image/upload/v1743156780/IMG-20250312-WA0010_vmxund.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dobirrdcu/image/upload/v1743156118/Before_2_e75vyq.png" }, 
  { type: "video", src: "https://res.cloudinary.com/daaahgwfy/video/upload/f_auto:video,q_auto/e6pvd1on8opfkm1a9nyc.mp4" },
  { type: "image", src: "https://res.cloudinary.com/dobirrdcu/image/upload/v1743155316/Before_1_lrrlva.png" },
  { type: "image", src: "https://res.cloudinary.com/dobirrdcu/image/upload/v1745685781/IMG-20250426-WA0013_lzj6pk.jpg" },
  { type: "video", src: "https://res.cloudinary.com/dobirrdcu/video/upload/v1743155368/VID-20241211-WA0002_dzpe82.mp4" },
];

export default function WorkShowcaseSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true, // ✅ Add this
      };
      

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            {slide.type === "image" ? (
              <MediaImage src={slide.src} alt={`Slide ${index + 1}`} />
            ) : (
              <MediaVideo
                controls
                src={slide.src}
                preload="auto"
                playsInline
                muted
                onContextMenu={(e) => e.preventDefault()}
              />
            )}
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  .slick-slide {
    padding: 0 10px;
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 400px;
  }
    @media (min-width: 768px) and (max-width:1024px) {
    height: 500px;
  }
`;

const MediaVideo = styled.video`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 400px;
  }
      @media (min-width: 768px) and (max-width:1024px) {
    height: 500px;
  }
`;

