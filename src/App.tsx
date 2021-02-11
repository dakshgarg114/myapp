import React, {useState} from 'react';
import './App.css';
import Post from './components/Post';
import NewPost from './components/NewPost';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

// Hasura Calls and connection
import {ApolloProvider, gql, useMutation, useQuery} from '@apollo/client';
import {ApolloClient, HttpLink,InMemoryCache} from '@apollo/client';
import { brotliDecompressSync } from 'zlib';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://mypostapp114.herokuapp.com/v1/graphql',
  }),
});


function App() {  

    return (
      <div>
    <ApolloProvider client={client}>
    <NewPost />
    <Post />
    </ApolloProvider>
    </div>
    
  );
}

export default App;
