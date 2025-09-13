import ClearanceServiceList from '../../../Elements/Clearance/Service/ClearanceServiceList.component';
import Button, { BUTTON_TYPE_CLASSES } from '../../../Buttons/buton.component';
import {
    Home,
    Truck,
    Recycle,
    Users,
    BriefcaseBusiness
} from 'lucide-react';

import { 
    ClearanceContainer,
    ClearanceHeadingContainer, 
    ClearanceTitle, 
    ClearanceSubtitle,
    ButtonWrapper
} from './ClearanceServices.styles';


const clearance_services = [
    {
        icon: Home,
        title: 'Complete House Clearance',
        description: 'Full property clearance from attics to basements. Perfect for house sales, rentals, or estate clearances.',
        features: [
            'All rooms cleared',
            'Furniture removal',
            'Appliance disposal',
            'Deep cleaning available'
        ]
    },
    {
        icon: Truck,
        title: 'Single Item Collection',
        description: 'Need just one item removed? We offer flexible single item collection services.',
        features: [
            'Sofas & furniture',
            'White goods',
            'Garden items',
            'Same day service'
        ]
    },
    {
        icon: Recycle,
        title: 'Eco-Friendly Disposal',
        description: 'We prioritize recycling and responsible disposal to minimize environmental impact.',
        features: [
            '95% recycling rate',
            'Charity donations',
            'Proper waste sorting',
            'Environmental certificates'
        ]
    },
    {
        icon: BriefcaseBusiness,
        title: 'Commercial Clearance',
        description: 'Office and commercial property clearance with full insurance and certification.',
        features: [
            'Secure data disposal',
            'Equipment recycling',
            'Flexible scheduling',
            'Waste transfer notes'
        ]
    },
    {
        icon: Users,
        title: 'Estate Clearance',
        description: 'Sensitive and professional estate clearance services during difficult times.',
        features: [
            'Respectful service',
            'Valuables identification',
            'Document handling',
            'Family liaison'
        ]
    },
];

const ClearanceServices = () => {
    return (
        <>
            <ClearanceContainer>
                <ClearanceHeadingContainer>
                    <ClearanceTitle>Our Clearance Services</ClearanceTitle>
                    <ClearanceSubtitle>
                        From single items to complete property clearances, we provide comprehensive solutions tailored to your specific needs.
                    </ClearanceSubtitle>
                </ClearanceHeadingContainer>
                <ClearanceServiceList clearanceServices={clearance_services} />
                <ButtonWrapper>
                    <Button buttonType={BUTTON_TYPE_CLASSES.feature}>View Detailed Pricing</Button>
                </ButtonWrapper>
            </ClearanceContainer>
        </>
    );
};

export default ClearanceServices;
