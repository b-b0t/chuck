import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const typeDefs = gql`

  type Category {
    name: String
  }

  type Random {
    created_at: String
    icon_url: String
    id: String
    updated_at: String
    url: String
    value: String
  }

  type Query {
    categories: [Category]
    random(category: String): Random
  }
`;
