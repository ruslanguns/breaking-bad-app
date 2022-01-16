import { gql } from "@apollo/client";

export const CHANGE_VOTES_LISTENER = gql`
  subscription {
    changeVotes {
      id
      name
      votes
    }
  }
`;
