import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'


const AverageStars = ({averageStars}) => {

  const Outer = styled.div`
    margin-left: 800px;
    font-family: helvetica-neue;
    font-size: 16px;
    font-stretch: 100%;
    text-size-adjust: 100%;
  `;

  const FirstDiv = styled.div`
    unicode-bidi: bidi-override;
    color: #c5c5c5;
    font-size: 30px;
    height: 25px;
    width: 100px;


    position: relative;
    padding: 0;
    text-shadow: 0px 1px 0 #a2a2a2;
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
  width: ${(averageStars / 5) * 150}px;
  `;

  const ThirdDiv = styled.div`
    padding: 0;
    display: block;
    z-index: 0;
  `;

  const Text = styled.div`
    margin-top: 20px
  `;

  return (
    <Outer>
    <FirstDiv>
    <SecondDiv><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></SecondDiv>
    <ThirdDiv><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></ThirdDiv>
    </FirstDiv>
    <Text>
    {averageStars} / 5 stars
    </Text>
    </Outer>
  )
}

export default AverageStars;