import styled from 'styled-components';

export const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #FFF;
    border: 1px solid hsl(220 13% 91%);
    padding-inline: 1.5rem;
    border-radius: 0.75rem;
`

export const AccordionButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    width: 100%;
    padding-top: 1.5rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
`

export const AccordionTitle = styled.span`
    font-size: 1.125rem;
    line-height: calc(1.5 / 1.125); 
    text-align: start;
`

export const AccordionAnswer = styled.div`
    display: grid;
    overflow: hidden;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    font-size: 0.875rem;
    line-height: calc(1.25 / 0.875);
    color: #494949;
    padding-inline: ;
`

export const AccordionText = styled.span`
    overflow: hidden;
    padding-bottom: 1rem;
`

export const AccordionSVG = styled.svg`
    fill: #0B0959;
    margin-left: 2rem;
    flex-shrink: 0;
`

export const AccordionRect1 = styled.rect`
    transform: 0 0 0 0 0;
    transform-origin: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 300ms;
`

export const AccordionRect2 = styled.rect`
    transform: 0 0 0 0 0;
    transform-origin: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 300ms;
    rotate: 90deg;
`


