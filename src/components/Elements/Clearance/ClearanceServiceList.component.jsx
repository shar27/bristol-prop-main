import React from 'react';

import ClearanceServiceCard from './ClearanceServiceCard.component';

import { ClearanceCardContainer } from './ClearanceServiceList.styles';

const ClearanceServiceList = ({ clearanceServices }) => {
    return (
        <ClearanceCardContainer>
            {
                clearanceServices.map((service, idx) => {
                    return (
                        <ClearanceServiceCard key={`serviceCard-${idx}`} service={service} />
                    )
                })
            }
        </ClearanceCardContainer>
    );
};

export default ClearanceServiceList; 
