import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const LinkNavbar = styled(Link)`
background-color: transparent !important;
display: flex;
flex: 1;
padding:10px 10px;
margin:5px 0px;
color: #000;
font-size: 13pt;
font-weight: 500;
transition: 250ms;
border:1px solid transparent;

${({ active }) => {
    if (active) {
      return `
    
    `
    }
    else {
      return `
    
    `
    }
  }}

&:hover {
  text-decoration: none;
  color:#000;

border : 1px solid red;
}
`

export const ContainerIcon = styled.div`
text-align: right;
font-size: 18pt;
`

export const SideNav = styled.div`
position: fixed;
top: 0;
left: ${({ side }) => side ? 0 : "-500px"};
/* background-color: red; */
width: 250px;
height: 100vh;
display: flex;
flex-direction: column;
transition: 250ms;
box-shadow: 3px -1px 10px -5px rgba(0,0,0,0.75);
z-index:2;
background-color: #fff;
`

export const LeftNavbar = styled.div`
flex: 1;
`
export const RightNavbar = styled.div`
flex:1;
`

export const ContainerNavbar = styled.nav`
/* background-color: red; */
height: 70px;
display: flex;
align-items: center;
`