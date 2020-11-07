import React from 'react';
import { items, sellers } from '../data';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Link, 
    Route,
    Switch,
  } from 'react-router-dom';

const Container = styled.div`
display: flex;
margin: 2em;
`;

const ItemInfo = styled.div`
margin-left: 25px;
`;

const Title = styled.h1`
font-family: 'Raleway';
font-weight: bold;
color: #484848;
margin: 0;
`;

const LatinName = styled.p`
margin-top: 0;
color: darkgrey;
font-family: 'Lato', sans-serif;
font-style: italic;
font-weight: 400;
`;

const Description = styled.p`
font-family: 'Lato', sans-serif;
`;

const CountryOfOrigin = styled.p`
font-family: 'Lato', sans-serif;
color: #484848;

& span {
    font-style: italic;
    font-weight: bold;
};
`;

const Image = styled.img`
display: inline-block;
max-width: 300px;
max-height: 300px;
border-radius: 15px;
`;

const Button = styled.button`
color: white;
background-color: #6600ff;
border: none;
border-radius: 10px;
height: 50px;
width: 200px;
`;  

const SellerImage = styled.img`
height: 50px;
width: 50px;
margin-top: 10px;
border-radius: 100%;
`;

const StoreName = styled.p`
margin-left: 15px;
display: inline-block;
font-family: 'Lato', sans-serif;
`;

  const ItemDetails = () => {
      const { itemId } = useParams();
      const itemList = Object.values(items);
      const sellerList = Object.values(sellers);
      console.log(items, sellers)
      return (
          <div>
        {itemList.map((item) => {
            if (itemId === item.id) {
                return (
                    <Container>
                    <Image src={item.imageSrc} />
                    <ItemInfo>
                    <Title>{item.name}</Title>
                    <LatinName>{item.latinName}</LatinName>
                    <Description>{item.description}</Description>
                    <CountryOfOrigin>Product of <span>{item.countryOfOrigin}</span></CountryOfOrigin>
                    <Button>${item.price} - {item.quantity > 0 ? 'Buy now' : 'Sold out'}</Button>
                    {sellerList.map((seller) => {
                        if (seller.id === item.sellerId) {
                            console.log(seller)
                            return (
                            <div>
                            <SellerImage src={seller.avatarSrc} />
                            <StoreName>Sold by: {seller.storeName}</StoreName>
                            </div>
                            )
                        }
                    })
            }
                    </ItemInfo>
                    </Container>
                  )
            }
})}
              </div>
      )
  }

  export default ItemDetails