import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-qa.seamasterai.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
