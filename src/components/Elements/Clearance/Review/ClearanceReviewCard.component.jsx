import React from 'react';

import ReviewProvider, { PROVIDER_TYPE_CLASSES } from './ReviewProvider.component';
import Star from '../../Star/Star.component';

import {
    ReviewCardContainer,
    ReviewLinkOverlay,
    ReviewLink,
    ReviewCard,
    ReviewStarContainer,
    ReviewCardTitle,
    ReviewCardContent,
    ReviewInfoContainer,
    ReviewAuthor,
    ReviewDate
} from './ClearanceReviewCard.styles';

const ClearanceReviewCard = ({ review }) => {
    const date_options = { year: 'numeric', month: 'short', day: 'numeric' };

    let provider;
    switch (review.review_site) {
        case "TrustPilot":
            provider = PROVIDER_TYPE_CLASSES.trust
            break;

        case "Google":
            provider = PROVIDER_TYPE_CLASSES.google
            break;
    
        default:
            provider = PROVIDER_TYPE_CLASSES.base
            break;
    };

    let content;
    if (review.content.length > 300) {
        content = `${review.content.substring(0, 250).trim()}...`;
    } else {
        content = review.content;
    }

    return (
        <ReviewCardContainer>

            <ReviewLinkOverlay className='overlay'>
                <ReviewLink href={review.url}>Read Full Review</ReviewLink>
            </ReviewLinkOverlay>

            <ReviewCard className='content'>
                <ReviewStarContainer>
                    <Star rating={review.rating}/>
                    <ReviewProvider providerType={provider}>
                        {review.review_site}
                    </ReviewProvider>
                </ReviewStarContainer>

                <ReviewCardTitle>
                    {review.title}
                </ReviewCardTitle>

                <ReviewCardContent>
                    {content}
                </ReviewCardContent>

                <ReviewInfoContainer>
                    <ReviewAuthor>
                        {review.author}
                    </ReviewAuthor>
                    <ReviewDate>
                        {review.date.toLocaleDateString("en-UK", date_options)}
                    </ReviewDate>
                </ReviewInfoContainer>
            </ReviewCard>

        </ReviewCardContainer>
    );
};

export default ClearanceReviewCard;
