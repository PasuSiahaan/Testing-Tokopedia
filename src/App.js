import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

//css
import './App.css';

//component
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home';

// page
import PokemonList from "./container/Page/PokemonList/PokemonList";
import PokemonDetail from "./container/Page/PokemonDetail/PokemonDetail"

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache()
});

const App =()=>{
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
          <Navbar />   
          <div className='container'>
            <Route exact path='/' component={PokemonList} /> 
            <Route exact path='/my-pokemon-list' component={Home} /> 
            <Route exact path='/pokemon-detail/:pokemonName' component={PokemonDetail} /> 
          </div>
        </div>
      </Router>
    </ApolloProvider>
    
  )};
export default App;