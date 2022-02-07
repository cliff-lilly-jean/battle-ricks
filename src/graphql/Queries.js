import { gql } from '@apollo/client';

// create the graphql query
export const RICK_AND_MORTY_CHARACTERS = gql`
query charactersQuery($page: Int) {
	characters(page: $page) {
  info {
      pages
      count
    }
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