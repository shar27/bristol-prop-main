import React, { useState } from 'react';

import {
    AccordionContainer,
    AccordionButton,
    AccordionTitle,
    AccordionAnswer,
    AccordionText,
    AccordionSVG,
    AccordionRect1,
    AccordionRect2
} from './Accordion.styles';

const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordionOpen = () => {
        setIsOpen(!isOpen);
    };

    const openAccordionStyles = {
        gridTemplateRows: '1fr',
        opacity: '100%'
    };

    const closedAccordionStyles = {
        gridTemplateRows: '0fr',
        opacity: '0%'
    };

    return (
        <AccordionContainer>

            <AccordionButton onClick={() => toggleAccordionOpen()}>
                <AccordionTitle>{question}</AccordionTitle>
                <AccordionSVG
                    width={16}
                    height={16}
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <AccordionRect1
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        style={isOpen ? { rotate: '180deg' } : null}
                    />
                    <AccordionRect2
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        style={isOpen ? { rotate: '180deg' } : null}
                    />
                </AccordionSVG>
            </AccordionButton>

            <AccordionAnswer style={isOpen ? openAccordionStyles : closedAccordionStyles}>
                <AccordionText>{answer}</AccordionText>
            </AccordionAnswer>

        </AccordionContainer>
    );
};

export default Accordion;

