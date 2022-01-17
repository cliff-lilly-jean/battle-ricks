import { gql } from '@apollo/client';

// create the graphql query
export const RICK_AND_MORTY_CHARACTERS = gql`
query {
	characters {
    results {
      id
      name
      species
      status
      gender
      image
      location {
        id
        name
        type
      }
    }
  }
}`;