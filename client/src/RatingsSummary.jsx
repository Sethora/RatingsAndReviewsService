import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const TotalReviews = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  font-family: helvetica neue;
  margin-bottom: 15px;
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
      <TotalReviews>
        {this.props.totalNumberReviews} reviews
      </TotalReviews>
    );
  }
}

export default RatingsSummary;