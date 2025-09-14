import styled from 'styled-components';

export const ClearanceContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 4rem 2rem;

    @media (width <= 850px) {
        gap: unset;
    }
`

export const ClearanceHeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.875rem;

`

export const ClearanceTitle = styled.h2`
    text-align: center;
    margin-top: 3rem;
    font-size: 3rem;
    color: #0B0959;

    @media (width <= 850px) {
        font-size: 2.25rem;
        line-height: calc(2.5 / 2.25);
    }
`

export const ClearanceSubtitle = styled.p`
    text-align: center;
    font-size: 1.25rem;
    line-height: calc(1.75 / 1.25);
    color: #0B0959;
    max-width: 750px;
    margin: 0 auto;

    @media (width <= 850px) {
        font-size: 1rem;
        line-height: calc(1.5 / 1);
        max-width: 550px;
    }
`

export const ButtonWrapper = styled.div`
    margin: 0 auto;

    @media (width <= 850px) {
        margin: -20px auto 0 auto;
    }
`

