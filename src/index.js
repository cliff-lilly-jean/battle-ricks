import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// GRAPHQL & APOLLO CLIENT
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// add the ApolloClient
const rickAndMortyClient = new ApolloClient({
 cache: new InMemoryCache(),
 uri: 'https://rickandmortyapi.com/graphql',
});

ReactDOM.render(
 <React.StrictMode>
  <ApolloProvider client={rickAndMortyClient}>
   <App />
  </ApolloProvider>
 </React.StrictMode>,
 document.getElementById('root')
);

