import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import BookList from "./components/BookList";
import AddBook from './components/AddBook';
import NavigationBar from './components/NavigationBar';
import ListTopics from './components/ListTopics';

// appolo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <NavigationBar/>
      <div className="px-24 py-8">
        <ListTopics/>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
