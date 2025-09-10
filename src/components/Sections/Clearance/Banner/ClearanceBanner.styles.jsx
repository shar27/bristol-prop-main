import styled from "styled-components";


export const Wrapper = styled.div`
  font-family: Arial, sans-serif;
`;

export const BannerContainer = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const BannerImageContainer = styled.div`
    position: absolute;
    inset: 0;
`

export const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
`
export const BannerOverlay = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    inset: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    //padding: 0 10rem;
`

export const BannerTitleContainer = styled.div`
    text-align: center;
    max-width: 70%;
`

export const BannerTitle = styled.h2`
    color: #FFFFFF;
    font-size: 3rem;
    margin-bottom: 0.5rem;
`

export const BannerSubTitle = styled.p`
    color: #FFFFFF;
    font-size: 1.5rem;
`

export const BannerButtonsContainer = styled.div`
    display: flex;
    gap: 3rem;
    margin: 2rem auto;
`

export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

export const TagItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: #FFF
`
