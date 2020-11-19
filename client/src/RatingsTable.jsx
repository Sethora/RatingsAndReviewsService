import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const RatingsTable = ({barData, totalReviews}) => {

const Outer = styled.div`
  margin-left: 21vw;
  margin-top: 10px;
  font-size: 14px;
  font-family: helvetica-neue;
`;

const Inner = styled.div`
display: flex;
flex-wrap: wrap;
width: 19.09vw;
height: 12px;
border: 1px solid black;
float: right;
margin-right: 55vw;
`;


const Color = styled.div`
display: flex;
width: ${(barData.total / totalReviews) * 19.09 }vw;
height: 12px;
background-color: black;

`;

const Text = styled.div`
  margin-left: 21vw;
  font-size: 14px;
  font-family: helvetica-neue;
`;

    return (
      <div>
            <Outer>
          {barData.stars} stars
          <Inner>
          <Color>
            <Text>{barData.total}</Text>
          </Color>
          </Inner>
        </Outer>
      </div>
    )

}

export default RatingsTable;