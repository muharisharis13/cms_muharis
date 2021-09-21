import styled from 'styled-components'


export const Button = styled.button`
border: none;
background-color: #3eb6be;
border: 1px solid #3eb6be;
border-radius: 5px;
color:#fff;
display: flex;
padding:5px 10px;
margin : 20px 0px;
width: 100%;
align-items: center;
justify-content: center;
transition: 250ms;
font-weight: 550;

&:hover {
  background-color: transparent;
  color:#000;
}
`