import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const TitleText = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: georgia;
`;

const Bar = styled.div`
  border-top: 1px solid;
  border-color: #eee;
  margin-top: 24px;
  margin-bottom: 24px;
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