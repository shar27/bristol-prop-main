import styled from 'styled-components';

export const AccordionContainer = styled.div`
    padding-block: 0.5rem;
`

export const AccordionButton = styled.button`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const AccordionTitle = styled.span`

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
`

export const AccordionText = styled.div`
    overflow: hidden;
`

export const AccordionSVG = styled.svg`
    fill: red;
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


