import styled from 'styled-components'

export const ReviewCardContainer = styled.div`
    display: flex;
    position: relative;
    //height: 100%;
    width: fit-content;
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-duration: 300ms;

    &:hover {
        transform: tranlateY(-0.5rem)
    }
`

export const ReviewLinkOverlay = styled.div`
    position: absolute;
    z-index: 1; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0%;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    overflow: hidden;
    
    &:hover {
        backdrop-filter: blur(2px);
        opacity: 100%;
    }

    &:hover ~ .content {
        transform: translateY(-0.5rem)
    }
`

export const ReviewLink = styled.a`
    background-color: #0B0959;
    text-decoration: none;
    color: #FFF;
    padding: 0.25rem 0.75rem;
    border-radius: 0.75rem;
    box-shadow: 
        0 10px 15px -3px rgb(0 0 0 / 0.1), 
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    cursor: pointer;
`

export const ReviewCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    box-shadow: 
        0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1); 
    border-radius: 0.5rem; 
    padding: 1.5rem; 
    overflow: hidden;
    transition-property: transform opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
`

export const ReviewStarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
`

export const ReviewCardTitle = styled.h3`
    color: #0B0959;
    font-size: 1rem;
    line-height: calc(1.5 / 1);
`

export const ReviewCardContent = styled.p`
    color: #494949;
    padding: 0 0.5rem;
    font-size: 0.875rem; 
    line-height: calc(1.25 / 0.875);
    font-weight: 500;
`

export const ReviewInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.75rem 0;
`

export const ReviewAuthor = styled.span`
    font-size: 0.875rem; 
    line-height: calc(1.25 / 0.875);
    font-weight: 700;
`

export const ReviewDate = styled.span`
    color: #494949a1;
    font-size: 0.875rem; 
    line-height: calc(1.25 / 0.875);
`
