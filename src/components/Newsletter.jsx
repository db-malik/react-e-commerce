import React from 'react'
import styled from 'styled-components'
import Send from '@material-ui/icons/Send';

const Container = styled.div`
height :60vh;
background-color:#fcf5f5;
display :flex;
align-items :center;
flex-direction :column;
justify-content :center;
`  
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;`

const Desc = styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
`  
const InputContainer = styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border: 1px solid lightgray;
`  
const Input = styled.input`
border:none;
flex:8;
padding-left:20px;
outline:none;
`

const Button = styled.div`
flex:1;
border:none;
background-color:teal;
color:white;
padding:auto;
display:flex;
justify-content:center;
align-items:center;
`


const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from favorite products.</Desc>
      <InputContainer>
         <Input placeholder='your email'/>
         <Button>
               <Send style={{fontSize:'35px'}}/>
         </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter