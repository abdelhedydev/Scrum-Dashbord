import React from 'react';
import { Query } from 'react-apollo';
import { filter } from 'lodash';
import PropTypes from 'prop-types';
import TASKS from '../../graphql/querries';
import TasksStyle from './TasksStyle';
import Column from '../Column';

const Tasks = ({ className }) => (
  <div className={className}>
    <div className="tasks__list">
      <Query query={TASKS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          const TO_DO = filter(data.tasks, task => (task.type === 'TO_DO'));
          const IN_PROGRESS = filter(data.tasks, task => (task.type === 'IN_PROGRESS'));
          const DONE = filter(data.tasks, task => (task.type === 'DONE'));
          const STORY = filter(data.tasks, task => (task.type === 'STORY'));
          return (
            <>
              <Column tasks={STORY} status="STORY" />
              <Column tasks={TO_DO} status="To Do" />
              <Column tasks={IN_PROGRESS} status="IN_PROGRESS" />
              <Column tasks={DONE} status="DONE" />
            </>
          );
        }}
      </Query>
    </div>
  </div>
);

Tasks.propTypes = {
  className: PropTypes.string,
};

export default TasksStyle(Tasks);
