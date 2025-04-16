import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      user {
        email
        username
      }
      jwt
    }
  }
`;
