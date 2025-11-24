import styled from 'styled-components';

export const QuoteModalContainer = styled.div`
    display: flex;
    position: fixed;
    background-color: color-mix(in oklab, #000000 60%, transparent);
    height: 100%;
    width: 100%;
    inset: 0;
    align-items: center;
    justify-content: center;
    z-index: 950;
`

export const QuoteModalContent = styled.div`
    position: relative;
    height: 90vh;
    width: 90%;
    max-width: 42rem;
    padding-inline: 2rem;
    padding-block: 3rem;
    background-color: white;
    border-radius: 0.75rem;
    z-index: 999;
    overflow-y: auto;
    overflow-x: hidden;
`

export const QuoteModalHeader = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    @media (width <= 576px) {
        text-align: center;
    }
`

export const QuoteModalTitle = styled.h3`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    letter-spacing: -0.025rem;
`

export const QuoteModalDescription = styled.p`
    font-size: 0.875rem;
    line-height: 1.25;
    color: hsl(220 15% 45%);
    margin-top: 0.5rem;
`

export const QuoteModalForm = styled.form`
    
`

export const QuoteModal2Fields = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1.5rem;

    @media (width <= 768px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const QuoteModal1Field = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 1.5rem;
`

export const QuoteModalFormField = styled.div`

`

export const QuoteModalFormLabel = styled.label`
    font-size: 0.875rem;
    line-height: 1;
    font-weight: 700;
`

export const QuoteModalFormInput = styled.input`
    display: flex;
    height: 2.5rem;
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid hsl(220 13% 91%);
    background-color: hsl(0 0% 98%);
    padding-inline: 0.75rem;
    padding-block: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25;
    
    &:file {
        border-width: 0px;
        background-color: transparent;
        font-size: 0.875rem;
        line-height: calc(1.25 / 0.875);
        font-weight: 500;
        color: hsl(220 15% 15%);
    }

    &:placeholder {
        color: hsl(220 15% 45%);
    }
    
    &:focus-visible{
        outline-style: none;
        border: 2px solid hsl(210 100% 45%);
    }

    @media (width <= 768px) {
        font-size: 1rem;
        line-height: 1.5;
    }
`

export const QuoteModalSelect = styled.select`
    display: block;
    height: 2.5rem;
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid hsl(220 13% 91%);
    background-color: hsl(0 0% 98%);
    padding-inline: 0.75rem;
    padding-block: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25;

    &:placeholder {
        color: hsl(220 15% 45%);
    }
    
    &:focus-visible{
        outline-style: none;
        border: 2px solid hsl(210 100% 45%);
    }

    @media (width <= 768px) {
        font-size: 1rem;
        line-height: 1.5;
    }

    //bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
`

export const QuoteModalSelectItem = styled.option`
    background-color: hsl(0 0% 98%);

    &:focus{
        background-color: hsl(210 40% 96%);
    }
`

export const QuoteModalUploadContainer = styled.div`
    margin-top: 0.5rem;
    border: 2px dashed hsl(220 15% 45% / .25);
    border-radius: 0.75rem;
    padding: 1rem;
`
export const QuoteModalUploadPhotos = styled.div`
    margin-top: 0.5rem;
`
export const QuoteModalFormSpan = styled.span`
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: hsl(220 15% 45%);
`

export const QuoteModalFormTextArea = styled.textarea`
    display: flex;
    margin-top: 0.5rem;
    font-family: 'Khula', sans-serif;
    min-height: 80px;
    width: 100%;
    padding-inline: 0.75rem;
    padding-block: 0.5rem;
    border: 1px solid hsl(220 13% 91%);
    background-color: hsl(0 0% 98%);
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: 0.375rem;

    &:placeholder {
        color: hsl(220 15% 45%);
    }

    &:focus-visible{
        outline-style: none;
        border: 2px solid hsl(210 100% 45%);
    }
`

export const QuoteModalFilePreviewContainer = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;

    @media (width <= 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const QuoteModalFilePreview = styled.div`
    position: relative;
`

export const QuoteModalFileDetails = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: hsl(210 40% 96%);
    border-radius: 0.5rem;
    color: hsl(220 15% 45%);
`

export const QuoteModalFileName = styled.span`
    font-size: 0.75rem;
    line-height: calc(1 / 0.75);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
`

export const QuoteXButton = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    display: block;
    background-color: transparent;
    border: none;
    padding: 0.25rem;
    
    &:hover {
        cursor: pointer;
    }
    
    & > svg {
        color: #000000;
        transition-timing-function: ease;
        transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke;
        transition-duration: 150ms;

        &:hover {
            color: hsl(0 84.2% 60.2%);
        }
    }
`

