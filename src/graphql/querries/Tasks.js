import { gql } from 'apollo-boost';

const TASKS = gql`
  {
    tasks{
      id
      name
      type
    }
  }
`;
export default TASKS;
