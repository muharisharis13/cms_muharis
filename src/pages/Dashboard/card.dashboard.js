import React from 'react'
import styled from 'styled-components'
import { FaBoxOpen } from 'react-icons/fa'

export const CardDashboard = ({ BgColor, title = "Title", angka = 255, icon = <FaBoxOpen /> }) => {
  return (
    <Container BgColor1={BgColor}>
      <ContainerIcon>{icon} </ContainerIcon>
      <ContainerText>
        <Title>{title}</Title>
        <Text>{angka}</Text>
      </ContainerText>
    </Container>
  )
}

const Text = styled.span`
font-size: 20pt;
display: flex;

font-weight: 700;
`

const Title = styled.h4`
font-weight: 700;
display: flex;
`

const ContainerText = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
`


const ContainerIcon = styled.div`
flex: 0.5;
display: flex;
align-items: center;
justify-content: center;
font-size: 60pt;
`

const Container = styled.div`
background-color: ${({ BgColor1 }) => BgColor1};
border: 1px solid ${({ BgColor1 }) => BgColor1};
padding:10px 10px;
display: flex;
color:#f2f3f5;
border-radius: 5px;
cursor:pointer;
transition: 250ms;
margin:10px 0px;
height: 120px;

&:hover {
  background-color: transparent;
  color:${({ BgColor1 }) => BgColor1};
}
`
