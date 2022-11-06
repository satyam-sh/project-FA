import styled from "styled-components";

export const Container = styled.div`
padding-left:60px;
padding-right:60px;
@media screen and (max-width:768px){
    padding-left:12px;
    padding-right:12px;
}
`;
export const Heading =styled.h1`
font-size:26px;
@media screen and (max-width:768px){
    font-size:18px;
}
`


export const CardItems = styled.ul`
display:flex;
list-style:none;
overflow-x:auto;
padding-left:0;
`
