import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const TitleText = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: georgia, times, serif;
  font-weight: 400;
  margin-bottom: 40px;
`;

const Bar = styled.div`
  border-top: 1px solid #eee;
  margin: 24px 0;
`;


class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Bar></Bar>
        <TitleText>Ratings & Reviews</TitleText>
      </div>
    )
  }
}

export default Title;