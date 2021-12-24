import "./App.css";
import Layout from "./core/Layout";
import {
  ApolloProvider,
} from "@apollo/client";

import { client } from './graphql/config';

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout />
    </ApolloProvider>
  );
}

export default App;
