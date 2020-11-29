import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const RatingsTable = ({barData, totalReviews}) => {

const Outer = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  font-family: helvetica-neue;
  .stars {
    width: 50px;
  }
`;

const Inner = styled.div`
display: flex;
flex-wrap: wrap;
width: 19.09vw;
margin-right: 4%;
height: 12px;
border: 1px solid #c5c5c5;
float: right;
`;


const Color = styled.div`
display: flex;
width: ${(barData.total / totalReviews) * 19.09 }vw;
height: 12px;
background-color: black;

`;

const Text = styled.div`
  font-size: 14px;
  font-family: helvetica-neue;
`;

    return (
      <Outer>
        <div className="stars">{barData.stars} stars</div>
        <Inner>
          <Color />
        </Inner>
        <Text>{barData.total}</Text>
      </Outer>
    );

}

export default RatingsTable;