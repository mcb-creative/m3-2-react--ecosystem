import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    NavLink,
    Link, 
    Route,
    Switch,
  } from 'react-router-dom';

const HeaderArea = styled.div`
display: flex;
`;

const Title = styled.h1`
display: flex;
justify-content: flex-start;
width: 50%;
font-family: 'Raleway';
font-weight: bold;
`;

const Menu = styled.div`
display: flex;
justify-content: flex-end;
width: 50%;
`;

const StyledLink = styled(NavLink)`
margin-top: 11px;
padding: 20px 20px 0 20px;
font-family: Arial;
text-decoration: none;
color: #9400D3;

&:focus,
&:hover,
&:visited,
&:link,
{
  text-decoration: none;
  color: #9400D3;
}

&.active {
  color: #FF1493;
  border-bottom: 2px solid #FF1493;
  }
`;

  const Header = (props) => {
    console.log(props);
    return (
      <HeaderArea>
    <Title>Fruit Emporium</Title>
    <Menu>
      <StyledLink exact activeClassName="active" to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      </Menu>
    </HeaderArea>
    )
  };

  export default Header