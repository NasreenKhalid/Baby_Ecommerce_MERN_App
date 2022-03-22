import React from 'react'
import styled from 'styled-components';
import { Facebook } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { Room } from "@material-ui/icons";
import { Phone } from "@material-ui/icons";
import { MailOutline } from "@material-ui/icons";
import {mobile } from '../responsive';
import {Link} from 'react-router-dom'

const Container = styled.div`
display: flex;
${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
flex: 1;
display:flex;
flex-direction: column;
padding:20px;
`;

const Logo=styled.h1``
const Desc=styled.p`
margin:20px 0px;
`;
const SocialContainer=styled.div`
display:flex;
`;

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display: flex;
align-items:center;
justify-content: center;
margin-right:10px;
`;

const Center = styled.div`
flex: 1;
padding:20px;
${mobile({display:"none"})}
`
;

const Title=styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`;



const Right = styled.div`
flex: 1;
${mobile({marginLeft:"20px"})}
`
;

const ContactItem = styled.div`

margin-bottom: 20px;
  display: flex;
  align-items: center;`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>B`W.</Logo>
            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ex praesentium saepe aut ad exercitationem cum perspiciatis perferendis quae illum.</Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <LinkedIn/>
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
             <Link to="/">
             <ListItem>Home</ListItem>
               </Link>
           
          <ListItem>Cart</ListItem>
          <ListItem>Home Fashion</ListItem>
          <ListItem>Baby Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
        <Title>Contact</Title>
<ContactItem><Room style={{marginRight:"10px"}}/>
    622 Dixie Pat, USA
</ContactItem>
<ContactItem><Phone style={{marginRight:"10px"}}/>
   +1 235 677 563
</ContactItem>
<ContactItem><MailOutline style={{marginRight:"10px"}}/>
    contact@babyworld.com
</ContactItem>
<Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer