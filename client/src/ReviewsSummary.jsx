import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'



class ReviewsSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        Total Number of Reviews: {this.props.totalNumberReviews}
        <div>
          Average Stars: {this.props.averageStars}
        </div>
      </div>

    )
  }
}

export default ReviewsSummary;