import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import ReviewsContent from './ReviewsContent.jsx'

let i = 0;

const Bar = styled.div`
  border-top: 1px solid;
  border-color: #eee;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 200px;
  margin-right: 200px;
  font-family: helvetica-neue;
  margin-bottom: 50px;
`;

const Username = styled.span`
  font-weight: 700;
  width: 350px;
  display: inline-block;
  margin-bottom: 10px;
`;

const Stars = styled.span`
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
`;

const Category = styled.span`
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
  width: 90px;
`;

const UserAttribute = styled.span`
  font-size: 12px;
  font-weight: 400;
  display: inline-block;
  width: 260px;
`;

const Subject = styled.span`
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  margin-left: 350px;
`;

const Created = styled.div`
  float:right;
  font-size: 12px;
`;

const NotHelpful = styled.div`
  float: right;
  font-size: 12px;
  font-weight: 700;
  border-style: solid;
  border-width: 2px;
  margin-top: 10px;
  border-radius: 99999px;
  padding-left: 20.5px;
  padding-right: 20.5px;
  padding-top: 3px;
  padding-bottom: 3px;
  cursor: pointer;
`;

const Helpful = styled.span`
  float: right;
  font-size: 12px;
  font-weight: 700;
  border-style: solid;
  border-width: 2px;
  margin-top: 10px;
  border-radius: 99999px;
  padding-left: 20.5px;
  padding-right: 20.5px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-right: 15px;
  cursor: pointer;
`;

const Reviews = ({review}) => {

    return (
      <Bar>
        <Username>{review.username}</Username>
        <Created>{review.created} days ago</Created>
        <Stars>{review.stars} stars</Stars>
        <div>
          <Category>
            Age
          </Category>
          <UserAttribute>{review.age}</UserAttribute>
        </div>
        <div>
        <Category>
          Eye Color
        </Category>
        <UserAttribute>{review.eye_color}</UserAttribute>
        <Subject>{review.subject}</Subject>
        </div>
        <div>
          <Category>
            Hair color
          </Category>
          <UserAttribute>{review.hair_color}</UserAttribute>
        </div>
        <div>
          <Category>
            Skin Tone
          </Category>
          <UserAttribute>{review.skin_tone}</UserAttribute>
          <Text>{review.text}</Text>
        </div>
        <NotHelpful>
          Not Helpful({review.not_helpful})
        </NotHelpful>
        <Helpful>
          Helpful({review.helpful})
        </Helpful>
      </Bar>
    )

}

export default Reviews;