import "./App.css";
import Layout from "./core/Layout";
import { ApolloProvider } from "@apollo/client";
import { API_GRAPHQL_ENDPOINTS } from "./helpers/urls";

import { GraphQLConfig } from "./graphql/config";

const graphQLConfig = new GraphQLConfig(
  API_GRAPHQL_ENDPOINTS.http,
  API_GRAPHQL_ENDPOINTS.ws
);

function App() {
  return (
    <ApolloProvider client={graphQLConfig.getClient()}>
      <Layout />
    </ApolloProvider>
  );
}

export default App;
