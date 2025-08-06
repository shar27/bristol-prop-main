import styled from "styled-components";

export const BaseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    box-shadow: 0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1);
    width: auto;
    text-transform: capitalize;
    color: #000;

    &:hover {
        cursor: pointer;
        background-color: #000;
        color: #FFF;
        transition-property: color, background-color;
        transition-duration: 500ms;
        border: 1px solid #FFF;
    }
`

export const FeatureButton = styled(BaseButton)`
    min-width: 270px;
    background: linear-gradient(210deg,rgba(230, 131, 18, 1) 0%, rgba(158, 138, 65, 1) 35%, rgba(255, 119, 0, 1) 100%);
    color: #FFF;

    &:hover {
        scale: 125% 125%;
        transition-property: color, background-color, transform, scale;
        background: linear-gradient(210deg,hsla(32, 86%, 40%, 1.00) 0%, hsla(47, 42%, 40%, 1.00) 35%, hsla(28, 100%, 40%, 1.00) 100%);
        color: #fff;
        border: none;
    }
`

//background: linear-gradient(210deg,rgba(25, 124, 237, 1) 0%, rgba(97, 117, 190, 1) 35%, rgba(0, 136, 255, 1) 100%);