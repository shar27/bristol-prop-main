import React from 'react';

import ClearanceReviewCard from './ClearanceReviewCard.component';

import { ClearanceReviewContainer } from './ClearanceReviewList.styles';

const ClearanceReviewList = ({ clearanceReviews }) => {
    return (
        <ClearanceReviewContainer>
            {
                clearanceReviews.map((review, idx) => {
                    return (
                        <ClearanceReviewCard key={`reviewCard-${idx}`} review={review} />
                    )
                })
            }
        </ClearanceReviewContainer>
    );
};

export default ClearanceReviewList;
