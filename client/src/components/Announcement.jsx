import React from 'react'
import styled from "styled-components"

const Container = styled.div`
height:30px;
background-color: teal;
color: white;
display: flex;
align-items:center ;
justify-content: center;
font-size:14px;
font-weight:bold;
padding:4px 0 4px 0;
`;

const Announcement = () => {
  return (
   <Container>Happy Women's day to all the wonderful women out there!!!</Container>
  )
}

export default Announcement   