import React from 'react'
import { Link as RouterLink } from "react-router-dom";


import Accordion from '../../../Elements/Accordion/Accordion.component';

import {
    FAQSection,
    FAQHeader,
    FAQTitle,
    FAQSubtitle,
    FAQContainer,
    FAQContactContainer,
    FAQContact
} from './ClearanceFAQs.styles';

const faqs = [
    {
        question: "How much does house clearance cost?",
        answer: "Our pricing depends on the size of the property and amount of items."
    },
    {
        question: "How quickly can you clear my property?",
        answer: "For standard clearances, we can usually schedule within 24-48 hours. Emergency clearances can be arranged the same day. Most single rooms take 2-4 hours, while full houses typically take 1-2 days depending on size and accessibility."
    },
    {
        question: "Do you recycle and donate items?",
        answer: "Yes! We're committed to environmental responsibility. We recycle 95% of collected items, donate suitable goods to local charities, and only send true waste to landfill. We can provide certificates for your environmental records."
    },
    {
        question: "Are you licensed and insured?",
        answer: "Absolutely. We hold full waste carrier licenses, public liability insurance up to £2 million, and employer's liability insurance. All our team members are trained professionals and we provide waste transfer notes for all disposals."
    },
    {
        question: "What items can't you take?",
        answer: "We can't collect hazardous materials like asbestos, chemicals, paint, batteries, or gas cylinders. We also can't take medical waste or anything illegal. If you're unsure about specific items, just ask during your quote."
    },
    {
        question: "Do I need to be present during clearance?",
        answer: "Not necessarily, but we recommend it for the initial walkthrough and to identify any valuable or sentimental items. For subsequent visits, you can arrange for us to collect keys or access codes if needed."
    },
    {
        question: "What about valuable items found during clearance?",
        answer: "We always check with you before disposing of anything that appears valuable. Our experienced team can identify antiques, jewelry, and collectibles. We recommend having a professional valuation for high-value items before clearance begins."
    },
    {
        question: "Can you clean the property after clearance?",
        answer: "Yes, we offer optional deep cleaning services. This includes removal of carpets, basic cleaning of rooms, and preparation for new tenants or sale. This service can be added to any clearance package."
    },
    {
        question: "How do I get a quote?",
        answer: "Simply call us on 0117 299 0185, fill out our online form, or request a video quote via WhatsApp. For accurate pricing, we usually prefer to visit the property, but we can provide estimates based on photos and descriptions."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfer and all major credit and debit cards. Payment is usually due on completion of work, though we may require a deposit for large jobs. We provide full invoices for all services."
    }
];

const ClearanceFAQs = () => {
    return (
        <FAQSection id='faqs'>

            <FAQHeader>
                <FAQTitle>Frequently Asked Questions</FAQTitle>
                <FAQSubtitle>Got questions? We've got answers. Here are the most common questions we receive about our house clearance services.</FAQSubtitle>
            </FAQHeader>

            <FAQContainer>
                {
                    faqs.map((faq, idx) => {
                        return <Accordion question={faq.question} answer={faq.answer} key={`accordion-${idx}`} />
                    })
                }
            </FAQContainer>

            <FAQContactContainer>
                <FAQContact href='tel:01172990185'>
                    <span className='full-text'>Call: 0117 299 0185</span>
                    <span className='short-text'>Call</span>
                </FAQContact>
                <FAQContact href='mailto:hello@bristolpropertymaintenance.co.uk'>
                    <span className='full-text'>Email: hello@bristolpropertymaintenance.co.uk</span>
                    <span className='short-text'>Email</span>
                </FAQContact>
            </FAQContactContainer>

        </FAQSection>
    );
};

export default ClearanceFAQs;
