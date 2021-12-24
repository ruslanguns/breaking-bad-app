import { ApolloClient, split, InMemoryCache, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from '@apollo/client/utilities';
/*export const client = new ApolloClient({
  uri: "https://breaking-bad-voting-graphql.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});*/


const httpLink = new HttpLink({
    uri: "https://breaking-bad-voting-graphql.herokuapp.com/graphql"
  });
  
  const wsLink = new WebSocketLink({
    uri: `wss://breaking-bad-voting-graphql.herokuapp.com/graphql`,
    options: {
      reconnect: true
    }
  });

  
  
  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === "OperationDefinition" && operation === "subscription";
    },
    wsLink,
    httpLink
  );
  
  export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  });