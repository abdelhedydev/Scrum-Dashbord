import React from 'react';
import { Query } from 'react-apollo';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import TASKS from '../../graphql/querries';
import TasksStyle from './TasksStyle';

const Tasks = ({ className }) => (
  <div className={className}>
    <ul className="tasks__list">
      <Query query={TASKS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return map(data.tasks, (task, index) => (
            <li key={index}>{task.name}</li>
          ));
        }}
      </Query>
    </ul>
  </div>
);

Tasks.propTypes = {
  className: PropTypes.string,
};

export default TasksStyle(Tasks);
