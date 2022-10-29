import { registerRootComponent } from 'expo';

import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


// Initialize Apollo Client

const client = new ApolloClient({

  uri: 'http://localhost:8090/graphql',

  cache: new InMemoryCache()

});


const App = () => (

  <ApolloProvider client={client}>

    <MyRootComponent />

  </ApolloProvider>

);

registerRootComponent(App);
