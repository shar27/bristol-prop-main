import styled from 'styled-components';

export const ServiceCard = styled.div`
    background-color: lightgray;
    padding: 2rem;
    border-radius: 0.5rem;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    &:hover {
        translate: -15px -15px;
        box-shadow: 15px 15px 0px -3px #151570;
    }
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    padding: 10px;
    background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 59%, rgba(0, 212, 255, 1) 100%); //#0B093B;
    border-radius: 0.5rem;
`

export const CardTitle = styled.h4`
    font-size: 1.125rem;
    line-height: calc(1.75/1.125);
`

export const CardDescription = styled.p`
    font-size: 0.875rem;
    line-height: calc(1.25/0.875);
    margin-bottom: 1rem;
`

export const ServicesContainer = styled.div`
    margin-left: 1rem;
`

export const CardServicesList = styled.ul`
    list-style-type: none;
`

export const CardService = styled.li`
    font-size: 0.875rem;
    line-height: calc(1.75/0.875);

    &:before {
        content: '✓ ';
    }
`
