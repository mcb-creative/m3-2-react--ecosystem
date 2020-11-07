import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Link, 
  Route,
  Switch,
} from 'react-router-dom';

const AboutArea = styled.div`
font-family: 'Lato', sans-serif;
`;

const About = (props) => {
    return (
      <AboutArea>
        <p>Fruit emporium is founded on a very simple principle: Fruit is good.</p>
        <p>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</p>
      </AboutArea>
    )
  };

  export default About