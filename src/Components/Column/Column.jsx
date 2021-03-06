/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import Task from '../Task';
import ColumnStyle from './ColumnStyle';

const Column = ({ className, tasks, status }) => {
  const color = status === 'STORY' ? '#b3ccff' : '#ffffcc';
  return (
    <div className={className}>
      <h2 className="column__title">{status}</h2>
      {
        map(tasks, (task, index) => <Task key={index} name={task.name} color={color} />)
      }
    </div>
  );
};

Column.propTypes = {
  className: PropTypes.string,
  status: PropTypes.string,
  tasks: PropTypes.array,
};

export default ColumnStyle(Column);
