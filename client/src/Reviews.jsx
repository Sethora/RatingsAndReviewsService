import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import ReviewsContent from './ReviewsContent.jsx'


const Reviews = ({review}) => {

  let i = 0;

  const Bar = styled.div`
    border-top: 1px solid;
    border-color: #eee;
    margin: 24px 2px;
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
    margin-left: 35%
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

  const FirstDiv = styled.div`
      unicode-bidi: bidi-override;
      color: #c5c5c5;
      font-size: 20px;
      height: 25px;
      width: 100px;
      position: relative;
      padding: 0;
      text-shadow: 0px 1px 0 #a2a2a2;
      display: flex;
      margin-left: 35%;
    `;

    const SecondDiv = styled.div`
    color: black;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    overflow: hidden;
    width: ${(review.stars / 5) * 100}px;
    align-items: center;
    `;

    const ThirdDiv = styled.div`
      padding: 0;
      display: block;
      z-index: 0;
      align-items: center;
    `;

    const IndividualText = styled.div`
      margin-top: 20px
    `;

    const Recommend = styled.span`
      margin-left: 350px;
      margin-top: 25px;
    `;

    function Recommends() {
      if (review.recommends) {
        return <span>Recommended</span>;
      } else {
          return  <span>Not Recommended</span>
      }

    }

    return (
      <Bar>
        <Username>{review.username}</Username>
        <Created>{review.created} days ago</Created>
        <FirstDiv>
          <SecondDiv><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></SecondDiv>
          <ThirdDiv><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></ThirdDiv>
        </FirstDiv>
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