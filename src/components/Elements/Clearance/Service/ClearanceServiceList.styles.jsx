import styled from 'styled-components';

export const ClearanceCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 5rem auto;
    max-width: 1200px;

    @media (width <= 1280px) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 800px;
    }

    @media (width <= 850px) {
        grid-template-columns: repeat(1, 1fr);
        max-width: 400px;
        width: 80%;
    }
`
