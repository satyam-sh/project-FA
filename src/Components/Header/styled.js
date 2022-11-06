import styled from "styled-components"
import {GiHamburgerMenu} from "react-icons/gi"
import {TbWorld} from "react-icons/tb"
import {CgProfile} from "react-icons/cg"

export const Navbar = styled.nav`
height:90px;
position:fixed;
top:0;
width:100%;
background:snow;
padding-left:80px;
padding-right:80px;
padding-top:14px;
padding-bottom:14px;
box-shadow:0 1px 16px gray;
display:flex;
align-items:center;
justify-content:space-between;
@media screen and (max-width:992px){
    padding-left:40px;
    padding-right:40px;
}

`
export const LogoLarge = styled.img`
width:12%;
@media screen and (max-width:991px){
    display:none
}
`
export const LogoSmall = styled.img`
width:40px;
@media screen and (min-width:992px){
display:none
}
`
export const NavItems = styled.ul`
padding-left:0;
list-style:none;
display:flex;

justify-content:space-between;
align-items:center;
`
export const NavListItems = styled.li`
margin-right:6px;
`;



export const WorldLogo = styled(TbWorld)`
font-size:22px;

`
export const Container = styled.div`
width:80px;
height:40px;
border-radius:16px;
display:flex;
justify-content:center;
align-items:center;
border:1px solid gray;
padding:8px;
&:hover {
    box-shadow: 0 1px 4px gray;
}
`;




export const ButtonHam = styled.button`
border:none;
cursor:pointer;
background:transparent;
display:flex;
padding:10px;
border-radius:12px;
justify-content:center;
align-items:center;
`
export const Button = styled(ButtonHam)`
border-radius:50%;
&:hover {
    background-color: gray;
  }

`
export const Anchor = styled.a`
text-decoration:none;
color:#222222;
border-radius:12px;
font-weight:bold;

padding:10px;
font-size:16px;
font-family:Roboto;
&:hover {
    background-color: gray;
}
`

export const HamLogo = styled(GiHamburgerMenu)`
font-size:18px;
`
export const ProfileLogo = styled(CgProfile)`
font-size:26px;
`