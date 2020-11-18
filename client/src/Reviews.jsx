import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import ReviewsContent from './ReviewsContent.jsx'

const Bar = styled.div`
  border-top: 1px solid;
  border-color: #eee;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 200px;
  margin-right: 200px;
  font-size: 14px;
  font-weight: 700;
  font-family: helvetica-neue;
`;

const Attributes = styled.div`
  font-size: 12px;
`;

const UserAttributes = styled.span`
  margin-left: 5px;
  font-weight: 400;
`;

const User = styled.div`
margin-bottom: 10px;
`;

const WrittenReviews = styled.span`
  margin-right: 600px;
  float: right;
`;



const Reviews = ({user, reviews}) => {

    return (
      <Bar>
        <WrittenReviews>
          {reviews[0].subject}
        </WrittenReviews>
        <User>
          {user.username}
        </User>
        <Attributes>
          Age
          <UserAttributes>
            {user.age}
          </UserAttributes>
        </Attributes>
        <Attributes>
          Eye Color
          <UserAttributes>
            {user.eye_color}
          </UserAttributes>
        </Attributes>
        <Attributes>
          Hair Color
          <UserAttributes>
            {user.hair_color}
          </UserAttributes>
        </Attributes>
        <Attributes>
          Skin Tone
          <UserAttributes>
            {user.skin_tone}
          </UserAttributes>
        </Attributes>
      </Bar>
    )

}

export default Reviews;