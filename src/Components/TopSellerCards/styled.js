import {AiOutlineHeart} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"
import styled from "styled-components";

export const Heading =styled.h1`
@media screen and (max-width:768px){
    font-size:18px;
}
`

export const CardItem = styled.div`
background-image: url(${props => props.bg});
background-position:center;
background-size:cover;
min-width:220px;
height:300px;
margin-right:30px;
border-radius:12px;
margin-bottom:8px;
text-align:right;
@media screen and (max-width:768px){
    min-width:180px;
    height:240px;
    margin-right:10px;
}
`
export const Icon = styled(AiOutlineHeart)`
font-size:20px;
margin-top:10px;
color:white;
margin-right:10px;

`

export const StarIcon = styled(AiFillStar)`
color:black;
`
export const Details = styled.li`
display:flex;
flex-direction:column;

`