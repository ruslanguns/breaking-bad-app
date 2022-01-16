import { gql } from "@apollo/client";

export const ADD_VOTE = gql`
  mutation Mutation($character: ID!) {
    addVote(character: $character) {
      status
      message
    }
  }
`;
