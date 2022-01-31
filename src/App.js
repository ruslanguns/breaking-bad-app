import "./App.css";
import { ApolloProvider } from "@apollo/client";
import loadable from "@loadable/component";

import { API_GRAPHQL_ENDPOINTS } from "./helpers/urls";

import { GraphQLConfig } from "./graphql/config";
import "./configs/i18n";

const Layout = loadable(() => import("./core/Layout"));

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
