import styled from 'styled-components'


export const ReviewsSection = styled.section`
    padding: 4rem 8rem;
    background-color: #FFF;
`

export const ReviewsHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
`

export const ReviewsTitle = styled.h2`
    text-align: center;
    margin-top: 3rem;
    font-size: 3rem;
    color: #0B0959;
`

export const ReviewsSubtitle = styled.p`
    text-align: center;
    font-size: 1.25rem;
    line-height: calc(1.75 / 1.25);
    color: #0B0959;
    max-width: 750px;
    margin: 0 auto;
`

export const ReviewsFactContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
    margin-inline: auto;
    max-width: 48rem;

    @media (width <= 920px) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 400px;
    }

    @media (width <= 580px) {
        grid-template-columns: repeat(1, 1fr);
        width: 80%;
    }
`

export const ReviewsFact = styled.div`
    background-color: rgba(232, 232, 223, 0.6);
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
`

export const FactTitle = styled.div`
    color: #0B0959;
    font-weight: 700;
    font-size: 1.875rem;
    line-height: calc(2.25 / 1.875);
`

export const FactSubtitle = styled.div`
    color: #494949;
    font-size: 0.875rem;
    line-height: calc(1.25 / 0.875);
`
