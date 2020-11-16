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
        {this.props.averageStars}
      </div>
    )
  }
}

export default ReviewsSummary;