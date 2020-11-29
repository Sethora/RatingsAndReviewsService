import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Dropdown = styled.div`
  float: right;
  font-size: 16px;
  font-family: helvetica-neue;
`;

const Sort = styled.div`
  display: inline-block;
  margin-right: 5px;
`;

const Filter = ({handleChange}) => {
  return (
    <Dropdown>
      <Sort>
      Sort By:
      </Sort>
       <select onChange={handleChange}>
        <option>---</option>
        <option>Newest</option>
        <option>Oldest</option>
        <option>Highest Rating</option>
        <option>Lowest Rating</option>
        <option>Most Helpful</option>
      </select>
    </Dropdown>

  )
}

export default Filter;