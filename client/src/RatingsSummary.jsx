import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import WriteReview from './WriteReview.jsx'

const TotalReviews = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: helvetica neue;
  margin-left: 300px;
  margin-top: 25px;
`;

const Block = styled.div`
  .css-960eb6 {
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
}
`;


class RatingsSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <TotalReviews>{this.props.totalNumberReviews} reviews <span><WriteReview /></span></TotalReviews>

      </div>

    )
  }
}

export default RatingsSummary;