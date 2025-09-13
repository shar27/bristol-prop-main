import React from 'react'


import ClearanceReviewList from '../../../Elements/Clearance/Review/ClearanceReviewList.component';

import {
    ReviewsSection,
    ReviewsHeader,
    ReviewsTitle,
    ReviewsSubtitle,
    ReviewsContainer,
    ReviewsFactContainer,
    ReviewsFact
} from './ClearanceReviews.styles'


const reviews = [
    {
        id: 1,
        title: 'Excellent communication',
        content: `Excellent communication. Speedy and efficient removal by pleasant and friendly workers
        Totally recommend
        Ann Dickenson`,
        author: 'Ann Dickenson',
        review_site: 'Google',
        date: new Date("2025-07-25"),
        rating: 5,
        url: 'https://uk.trustpilot.com/reviews/6883339c1a077d8a853f34ca'
    },
    {
        id: 2,
        title: 'Professional Service',
        content: `We needed our late fathers property clearing, from the first contact by telephone, through the home visit for the quote and the actual day of clearance the Swift Team were professional but also sensitive to the reason for the household clearance

        They contacted the charities we wanted to donate toon our behalf, took items we wanted to keep to a storage center, and recycled as much as possible .

        They helped make a difficult and emotional task manageable

        Would highly recommend`,
        author: 'Deborah Muthike',
        review_site: 'TrustPilot',
        date: new Date("2025-06-05"),
        rating: 5,
        url: 'https://uk.trustpilot.com/reviews/68417ed7c2498b57dc992b00'
    },
    {
        id: 3,
        title: 'A Swift and reliable service that will now be first point of vall',
        content: `Not had a very good time with builders lately and was looking for a trusted handyman. So pleased I found Swift . They have restored my faith that there are still some people around who take pride in their work. They are now going to be my first point of call for the odd jobs that nobody wants to do properly anymore. Paul turned up on time did a really good job of cleaning my windows and also went above and beyond by refixing pipes that have only recently been renewed. I am very grateful and will use him again and recommend to others. Thank you Swift.`,
        author: 'Sandra',
        review_site: 'TrustPilot',
        date: new Date("2025-04-26"),
        rating: 5,
        url: 'https://uk.trustpilot.com/reviews/680cef438cc5a366201f3292'
    },
    {
        id: 4,
        title: 'Contact their team late on a Friday…',
        content: `Contact their team late on a Friday night to arrange somebody to come and help me sort out a broken door`,
        author: 'Ollie Brough',
        review_site: 'None',
        date: new Date("2025-01-18"),
        rating: 5,
        url: 'https://uk.trustpilot.com/reviews/678ad5dd0ba0cf044ea66772'
    },
]

const ClearanceReviews = () => {
    return (
        <ReviewsSection>
            <ReviewsHeader>
                <ReviewsTitle>
                    What Our Customers Say
                </ReviewsTitle>
                <ReviewsSubtitle>
                    Don't just take our word for it. Here's what our satisfied customers have to say about our house clearance services.
                </ReviewsSubtitle>
            </ReviewsHeader>
            <ReviewsContainer>
                <ClearanceReviewList clearanceReviews={reviews} />
            </ReviewsContainer>
            <ReviewsFactContainer>
                <ReviewsFact>

                </ReviewsFact>
            </ReviewsFactContainer>
        </ReviewsSection>
    );
};

export default ClearanceReviews;
