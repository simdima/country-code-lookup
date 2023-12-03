import { ApolloClient, InMemoryCache } from '@apollo/client';

const SERVER_URL = 'https://countries.trevorblades.com/';

const apolloClient = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});

export default apolloClient;
