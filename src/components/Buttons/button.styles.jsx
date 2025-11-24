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
    border: 1px solid #FFF;
    box-shadow: 0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1);
    width: auto;
    text-transform: capitalize;
    color: #000;

    &:hover {
        cursor: pointer;
        background-color: #000;
        color: #FFF;
        transition-property: color, background-color, background;
        transition-duration: 500ms;
    }
`

export const FeatureButton = styled(BaseButton)`
    min-width: 270px;
    background: linear-gradient(30deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 59%, rgba(0, 212, 255, 1) 100%);
    color: #FFF;
    border: none;
    
    &:hover {
        transition-property: color, background-color, background, transform, scale;
        transition-duration: 500ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        scale: 105% 105%;
        background: linear-gradient(30deg, hsla(243, 100%, 17.1%, 1.00) 0%, hsla(240, 86.2%, 35.5%, 1.00) 35%, hsla(190, 100%, 60%, 1.00) 100%);
        color: #FFF;
        border: none;
    }
`

export const FormButton = styled(FeatureButton)`
    min-width: unset;

    &:hover {
        scale: unset;
    }
`

export const GhostButton = styled(BaseButton)`
    background-color: transparent;
    border-color: transparent;
    box-shadow: unset;
    color: hsl(220 15% 60%);

    &:hover {
        background-color: transparent;
        color: hsl(220 15% 15%);
        transition-property: color, background-color, background;
        transition-duration: 300ms;
    }
`

export const InlineButton = styled(BaseButton)`
    padding: 0.375rem 1rem;
    font-size: 0.875rem;
    line-height: calc(1.25/0.875);
    font-weight: 500;
    border: 1px solid hsl(220 15% 15%);
    border-radius: 999px;
    background-color: #FFF;

    &:hover {
        background-color: #F9F9F9F9;
        color: unset;
    }
`
