import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Dropdown = styled.div`
  float: right;
  margin-right: 200px;
  font-size: 16px;
  font-family: helvetica-neue;
`;

const Filter = ({handleChange}) => {
  return (
    <Dropdown>
      Sort By:
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