import React from 'react'
import { Send } from "@material-ui/icons";
import styled from 'styled-components'
import {mobile } from '../responsive'

const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content: center;
flex-direction: column;
${mobile({margin:"0 20px"})}
`;


const Title = styled.h1`
font-size:60px;
margin-bottom: 20px;
`;

const Description = styled.div`
font-size:24px;
margin-bottom: 20px;
font-weight:300;
${mobile({textAlign:"center"})}
`;

const InputContainer = styled.div`
width:50%;
height:40px;
background-color: white;
display:flex;
justify-content: space-between;
border:1px solid lightgray;
${mobile({width:"80%"})}
`;

const Input = styled.input`
border:none;
flex:8;
padding-left:20px ;
`;
const Button = styled.button`
flex:1;
border:none;
background-color: teal;
color:white;
`;



const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates for your favorite products.</Description>
        <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
            <Send />
        </Button>
        </InputContainer>
        </Container>
  )
}

export default Newsletter