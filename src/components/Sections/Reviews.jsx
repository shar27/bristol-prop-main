import React from "react";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";
import FullButton from "../Buttons/FullButton";

// Assets
import AddImage1 from "../../assets/img/trustpilot.jpg";
import AddImage2 from "../../assets/img/reviews.png";
import AddImage3 from "../../assets/img/review.PNG";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Reviews() {
  return (
    <Wrapper id="reviews">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Testimonials</h1>
          </HeaderInfo>
          <TrustpilotWrapperSmall>
            <a href="https://www.trustpilot.com/review/swiftukproperties.co.uk">
              <img
                src="https://res.cloudinary.com/daaahgwfy/image/upload/c_thumb,w_200,g_face/v1741603982/license/tp_mxh4to.png"
                alt=""
                srcset=""
              />
            </a>
          </TrustpilotWrapperSmall>
          <TrustpilotWrapperLarge>
            <a href="https://www.trustpilot.com/review/swiftukproperties.co.uk">
              <img
                src="https://res.cloudinary.com/daaahgwfy/image/upload/v1741603982/license/tp_mxh4to.png"
                alt=""
                srcset=""
              />
            </a>
          </TrustpilotWrapperLarge>
          <ServiceBoxRow>
            <ReviewsWrapper>
              <img src={AddImage1} width={500} />
            </ReviewsWrapper>
            {/* single review */}
            <ReviewWrapper>
              <img src="https://res.cloudinary.com/dobirrdcu/image/upload/v1745686387/review_eixgsz.png" />
            </ReviewWrapper>
            
         
          </ServiceBoxRow>
          <ReviewWrapper>
              <img src={AddImage3} width={500}/>
            </ReviewWrapper>
          <GoogleWrapper>
            <img src="https://res.cloudinary.com/daaahgwfy/image/upload/c_thumb,w_200,g_face/v1741706709/rgtjdpp1iocrtlfudrfk.jpg" />
          </GoogleWrapper>
          <div>
            <HeaderInfo>
              <h1 className="font40 extraBold">
                Our trusted reviews speak for themselves
              </h1>
            </HeaderInfo>
            <SliderWrapper>

            <TestimonialSlider />
            </SliderWrapper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .slick-slide {
    padding: 0 10px; /* spacing between slides */
  }
`;


const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
  }
`;

const ServiceBoxRow = styled.div`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 30px;
            width:50%;
            height: auto;

        }

        /* For larger screens */
        @media (max-width: 768px) {
             width:100%;
                grid-template-columns: 1fr;
            
        }
`;



const GoogleWrapper = styled.div`
            display: flex;
            justify-content:center;

        
`;

const TrustpilotWrapperSmall = styled.div`
  display: none;
  img {
    width: auto;
  }
  @media (max-width: 1024px) {
    display: block;
  }
`;

const TrustpilotWrapperLarge = styled.div`
  display: block;
  img {
    width: auto;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
const ReviewWrapper = styled.div`
  img {
    width: 500px;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;
const ReviewsWrapper = styled.div`
  img {
    width: 500px;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;
