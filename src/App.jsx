import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Layout from './Components/Layout';
import './Styles/Reset.css';

const client = new ApolloClient({
  uri: 'https://api-apeast.graphcms.com/v1/cjwdkyl5u1pnl019nz10m5m79/master',
});
const App = () => (
  <ApolloProvider client={client}>
    <Layout />
  </ApolloProvider>
);

export default App;
