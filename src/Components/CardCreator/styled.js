import styled  from "styled-components";

export const CardsItem = styled.li`
background-image: url(${props => props.bg});
background-position:center;
background-size:cover;
min-width:600px;
height:350px;
margin-right:12px;
border-radius:20px;
@media screen and (max-width:768px){
    min-width:400px;
}

`
export const CardDetailsContainer = styled.div`
display:flex;
flex-direction:column;
width:40%;
height:100%;
justify-content:space-between;
padding-left:28px;
padding-bottom:20px;
`;

export const HeadContainer =styled.div``
export const Para = styled.p`
color:snow;
`;

export const Heading = styled.h1`
color:snow;
font-size:16px;
`
export const ShowButton = styled.button`
background:snow;
border-radius:6px;
border:none;
align-self:flex-start;
padding: 12px;
`