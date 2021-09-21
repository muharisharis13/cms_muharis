import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { CSecondary } from '../../Component/utl'

export const Search = ({ value, setSearch, placeholder = "search" }) => {
  return (
    <Container>
      <Input type="text" name="search" className="form-control" id="search" value={value} onChange={setSearch} placeholder={placeholder} />
      <ContainerIcon >
        <FaSearch />
      </ContainerIcon>
    </Container>
  )
}

const ContainerIcon = styled.span`
background-color: ${CSecondary};
display: flex;
color:#fff;
padding:8.5px 10px;
align-items: center;
justify-content: center;
text-align:center;
cursor:pointer;
border: 1px solid ${CSecondary};
`

const Input = styled.input`
border-radius: 0%;
transition:250ms;
&:focus{
  border-color: ${CSecondary};
}
`

const Container = styled.div`
display: flex;
align-items:center;
margin : 20px 0px;
justify-content: center;
background-color: red;
`
