import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Outer = styled.div`
  margin-left: 400px;
  margin-top: 20px;
`;

const Inner = styled.div`
width: 275px;
height: 15px;
border: 1px solid black;
float: right;
margin-right: 850px;
`;

const Color = styled.div`
width: ${200}px;
height: 15px;
background-color: black;

`;

const Text = styled.div`
  margin-left: 290px;
`;

class RatingsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {this.props.barData.map((data) => {
          return (
            <Outer>
          {data.stars} stars
          <Inner>
          <Color>
            <Text>{data.total}</Text>
          </Color>
          </Inner>
        </Outer>
          )
        })}

      </div>
    )
  }
}

export default RatingsTable;


// <Text>
      // 5 stars
      //   <ContainerStyles>
      //     <Color>
      //     </Color>
      //   </ContainerStyles>
      // 4 stars
      // <ContainerStyles>
      //     <Color>
      //     </Color>
      //   </ContainerStyles>
      //   3 stars
      // <ContainerStyles>
      //     <Color>
      //     </Color>
      //   </ContainerStyles>
      //   2 stars
      // <ContainerStyles>
      //     <Color>
      //     </Color>
      //   </ContainerStyles>
      //   1 stars
      // <ContainerStyles>
      //     <Color>
      //     </Color>
      //   </ContainerStyles>
      // </Text>