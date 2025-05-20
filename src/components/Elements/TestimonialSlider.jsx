import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
      <LogoWrapper>
          <TestimonialBox
            text="Not had a very good time with builders lately and was looking for a trusted handyman. So pleased I found Swift . They have restored my faith that there are still some people around who take pride in their work. They are now going to be my first point of call for the odd jobs that nobody wants to do properly anymore. Paul turned up on time did a really good job of cleaning my windows and also went above and beyond by refixing pipes that have only recently been renewed. I am very grateful and will use him again and recommend to others. Thank you Swift."
            author="Sandra"
          />
        </LogoWrapper>
        <LogoWrapper>
          <TestimonialBox
            text="Contact their team late on a Friday night to arrange somebody to come and help me sort out a broken door."
            author="Ollie Brough"
          />
        </LogoWrapper>
        <LogoWrapper>
          <TestimonialBox
            text="What a great job. Two charming and strong young men arrived punctually, immediately set to work clearing our garden and garage..."
            author="Christine"
          />
        </LogoWrapper>
        <LogoWrapper>
          <TestimonialBox
            text="Cannot fault them. Super quick with their responses. I had a property which required multiple things fixing, painting, cleaning etc..."
            author="HJS"
          />
        </LogoWrapper>
        <LogoWrapper>
          <TestimonialBox
            text="Absolutely amazing. I had to co-ordinate a clearance from Bournemouth, and Shar was a pleasure to deal with..."
            author="J Cameron"
          />
        </LogoWrapper>
        <LogoWrapper>
          <TestimonialBox
            text="Your guys have done a fantastic job, and I very much appreciate you being able to fit us in to your busy schedule at short notice..."
            author="Gerald Blake"
          />
        </LogoWrapper>
        <LogoWrapper>
          <TestimonialBox
            text="Quick service and good communication"
            author="Martyn Jellett"
          />
        </LogoWrapper>
        <LogoWrapper>
          <TestimonialBox
            text="They were so accomadating. House clearance done in less than 24hrs of my first call. (It was an emergency)
Absolutely recommend and very reasonably priced"
            author="Pippa Chapman"
          />
        </LogoWrapper>
      </Slider>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`;

const LogoWrapper = styled.div`
  padding: 0 15px;
  outline: none;

  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
