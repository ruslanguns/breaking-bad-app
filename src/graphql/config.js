import { ApolloClient, split, InMemoryCache, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

export class GraphQLConfig {
  #httpLink;
  #wsLink;
  #client;
  #link;

  constructor(httpLink, wsLink = "") {
    this.#setHttpLink(httpLink);
    if (wsLink !== "") {
      this.#setWsLink(wsLink);
      this.#setLink();
    } else {
      this.#link = this.#httpLink;
    }
    this.#setClient();
  }
  #setHttpLink(httpLink) {
    this.#httpLink = new HttpLink({
      uri: httpLink,
    });
  }

  #getHttpLink() {
    return this.#httpLink;
  }

  #setWsLink(wsLink) {
    this.#wsLink = new WebSocketLink({
      uri: wsLink,
      options: {
        reconnect: true,
      },
    });
  }

  #getWsLink() {
    return this.#wsLink;
  }

  #setLink() {
    const httpLink = this.#getHttpLink();
    const wsLink = this.#getWsLink();
    this.#link = split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      wsLink,
      httpLink
    );
  }

  #setClient() {
    this.#client = new ApolloClient({
      link: this.#link,
      cache: new InMemoryCache(),
    });
  }

  getClient() {
    return this.#client;
  }
}
