import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CPrimary, CSecondary } from '../utl'


export const LinkNavbar = styled(Link)`
display: flex;
flex: 1;
padding:10px 10px;
margin:5px 0px;
color: #fff;
font-size: 13pt;
font-weight: 500;
transition: 250ms;
border:1px solid transparent;

${({ active }) => {
    if (active) {
      return `
    
      background-color: ${CSecondary} !important;
    `
    }
    else {
      return `

        background-color: transparent !important;
    `
    }
  }}

&:hover {
  text-decoration: none;
  color:#fff;

border : 1px solid ${CSecondary};
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
/* box-shadow: 3px -1px 10px -5px rgba(0,0,0,0.75); */
z-index:2;
color:#fff;
background-color: ${CPrimary};
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