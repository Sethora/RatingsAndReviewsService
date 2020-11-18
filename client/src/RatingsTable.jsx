import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const RatingsTable = ({barData}) => {

const Outer = styled.div`
  margin-left: 300px;
  margin-top: 10px;
  font-size: 14px;
  font-family: helvetica-neue;
`;

const Inner = styled.div`
width: 275px;
height: 12px;
border: 1px solid black;
float: right;
margin-right: 800px;
`;


const Color = styled.div`
width: ${(barData.total / 100) * 275 }px;
height: 12px;
background-color: black;

`;

const Text = styled.div`
  margin-left: 290px;
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