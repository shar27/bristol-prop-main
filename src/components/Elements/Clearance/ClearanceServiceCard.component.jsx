import React from 'react'

import {
    ServiceCard,
    CardHeader,
    IconContainer,
    CardTitle,
    CardDescription,
    ServicesContainer,
    CardServicesList,
    CardService
} from './ClearanceServiceCard.styles'


const ClearanceServiceCard = ({ service }) => {
    return (
        <ServiceCard>
            <CardHeader>
                <IconContainer>
                    <service.icon style={{color: '#FFF'}}/>
                </IconContainer>
                <CardTitle>
                    {service.title}
                </CardTitle>
            </CardHeader>
            <CardDescription>
                {service.description}
            </CardDescription>
            <ServicesContainer>
                <CardServicesList>
                    {
                        service.features.map((feature, idx) => {
                            return (
                                <CardService key={`service-${idx}`}>{feature}</CardService>
                            )
                        })
                    }
                </CardServicesList>
            </ServicesContainer>
        </ServiceCard>
    );
};

export default ClearanceServiceCard;

