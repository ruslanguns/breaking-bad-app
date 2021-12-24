import { gql } from "@apollo/client";

export const PRINCIPAL_CHARACTERS_VOTES = gql`
  query PrincipalCharsVotes {
    characters {
      id
      name
      actor
      total_episodes
      votes
      url
    }
  }
`;
