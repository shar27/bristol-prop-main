import styled from 'styled-components';

export const FAQSection = styled.section`
    padding: 4rem 8rem;
    background-color: #FFF;

    @media (max-width: 678px) {
        padding: 4rem 4rem;
    }

    @media (max-width: 478px) {
        padding: 4rem 1.5rem;
    }
`

export const FAQHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
`

export const FAQTitle = styled.h2`
    text-align: center;
    margin-top: 3rem;
    font-size: 3rem;
    color: #0B0959;
`

export const FAQSubtitle = styled.p`
    text-align: center;
    font-size: 1.25rem;
    line-height: calc(1.75 / 1.25);
    color: #0B0959;
    max-width: 750px;
    margin-inline: auto;
    margin-bottom: 4rem;
`

export const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
    max-width: 56rem;
    margin-inline: auto;
    background-color: whitesmoke;
    border-radius: 0.5rem;
`

export const FAQContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 36rem;
    margin-inline: auto;
    margin-bottom: 3rem;
    margin-top: 4rem;

    @media (max-width: 875px) {
        flex-direction: column;
        gap: 0.75rem;
        max-width: 24rem;
    }
`

export const FAQContact = styled.a`
    padding-block: 0.75rem;
    padding-inline: 1.5rem;
    background-color: hsla(242, 82%, 19%, 1.00);
    color: #FFF;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    line-height: calc(1.25 / 0.875);
    transition-property: all;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 300ms;

    span.short-text {
        display: none;
    }

    &:hover {
        cursor: pointer;
        color: #FFF;
        background-color: hsla(242, 82%, 30%, 1.00)
    }

    @media (max-width: 875px) {
        width: 100%;
        text-align: center;
    }

    @media (max-width: 550px) {
        span.short-text { 
            display: inline-block; 
        }
        span.full-text { 
            display: none; 
        }
    }
`
