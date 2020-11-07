import React from 'react';
import styled from 'styled-components';
import { items } from '../data';
import ListingGrid from './ListingGrid.js';
import {
  BrowserRouter as Router,
  Link, 
  Route,
  Switch,
} from 'react-router-dom';

const HomeArea = styled.div`
font-family: 'Lato', sans-serif;
`;

const Home = (props) => {
    return (
      <HomeArea>
        <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
        <p>Browse items:</p>
        <ListingGrid itemList={Object.values(items)}/>
      </HomeArea>
    )
    };

    export default Home