import { ApolloClient, split, InMemoryCache, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

export class GraphQLConfig {
  #wsLink;
  #client;
  #link;

  constructor(httpLink, wsLink = "") {
    this.#setHttpLink(httpLink);
    if (wsLink !== "") {
      this.#setWsLink(wsLink);
      this.#setLink();
    }
    this.#setClient();
  }
  #setHttpLink(httpLink) {
    this.#link = new HttpLink({
      uri: httpLink,
    });
  }

  #getHttpLink() {
    return this.#link;
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
    this.#link = split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      this.#getWsLink(),
      this.#getHttpLink()
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
