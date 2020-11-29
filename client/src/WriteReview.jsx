import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Testing = styled.div`
cursor: pointer;
outline: 0;
color: #1470f5;
display: inline-block;
font-size: 14px;
font-weight: 400;
outline-color: rgb(20, 112, 245);

`;

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Testing>
        Write a review
      </Testing>
    );
  }
}

export default WriteReview;