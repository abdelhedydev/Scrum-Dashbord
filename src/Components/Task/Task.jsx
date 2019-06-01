import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TaskStyle = styled.div`
  border:1px solid grey;
  padding:5px 0;
  text-align:center;
  background: ${({ color }) => color};
  cursor: pointer;
`;

const Task = ({ color, name }) => (
  <TaskStyle color={color}>
    <p>{name}</p>
  </TaskStyle>
);

Task.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default Task;
