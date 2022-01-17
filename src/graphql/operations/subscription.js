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


export const CHANGE_VOTE_LISTENER = gql`
    subscription characterVoteCount($id: ID!) {
        changeVote(id: $id) {
            id
            name
            votes
        }
    }
`;