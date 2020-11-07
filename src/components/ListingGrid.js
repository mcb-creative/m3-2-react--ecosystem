import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Link, 
  Route,
  Switch,
} from 'react-router-dom';

const Container = styled.div`
display: grid;
margin: 20px;
grid-template-columns: repeat(auto-fit, minmax(275px,1fr));
grid-gap: 75px;
align-items: center;
`

const StyledLink = styled(Link)`
text-align: center;
border-radius: 10px;
-webkit-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.64);
-moz-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.64);
box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.64);

&:focus,
&:hover,
&:visited,
&:link,
&:active {
  text-decoration: none;
  color: black;
}
`;

const Image = styled.img`
width: 225px;
height: 225px;
margin-top: 25px;
`;

const Name = styled.h2`
font-family: 'Raleway';
font-weight: bold;
font-size: 1.25em;
margin: 0;
`;

const LatinName = styled.p`
margin-top: 0;
color: darkgrey;
font-family: 'Lato', sans-serif;
font-style: italic;
font-weight: 400;
`;

const ListingGrid = ({ itemList }) => {
  console.log(itemList)
    return (
    <Container>
      {itemList.map((item) => {
      return (
      <StyledLink to={`/items/${item.id}`}>
        <Image src={item.imageSrc} />
        <Name>{item.name}</Name>
        <LatinName>{item.latinName}</LatinName>
      </StyledLink>
      )
})}
      </Container>
    )};

  ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        latinName: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  export default ListingGrid;