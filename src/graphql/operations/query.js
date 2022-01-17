import { gql } from "@apollo/client";

export const PRINCIPAL_CHARACTERS_VOTES = gql`
  query PrincipalCharsVotes {
    characters {
      id
      name
      description
      portrayed: actor
      total_episodes
      votes
      url
      img: photo
    }
  }
`;

export const GET_CHARACTER = gql`
  query detailsCharacter($id: ID!){
    character(id: $id) {
      id
      total_episodes
      votes
      name
      actor
      description
      photo
      url
    }
  }
`;
