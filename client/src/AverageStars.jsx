import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Outer = styled.div`
  margin-left: 850px;
  font-family: helvetica-neue;
  font-size: 16px;
  font-stretch: 100%;
  text-size-adjust: 100%;
`;

const AverageStars = ({averageStars}) => {
  return (
    <Outer>{averageStars} / 5 stars</Outer>
  )
}

export default AverageStars;