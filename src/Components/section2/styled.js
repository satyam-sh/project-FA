import styled from "styled-components";

export const Container = styled.div`
display:flex;
padding-left:60px;
align-items:center;
@media screen and (max-width:768px){
    flex-direction:column;
    padding-left:12px;
}
`

export const FilterContainer =  styled.div`
display:flex;
justify-content:space-between;
width:30%;
align-items:center;
@media screen and (max-width:768px){
    width:60%;
}
;
`

export const TodoContainer = styled(FilterContainer)`
width: 50%;
border-left : 1px solid black;
margin-left:20px;
display:flex;
align-items:center;
padding-left:20px;
overflow-x:auto;
@media screen and (min-width:992px){
    width:65%;
    
}
@media screen and (max-width:768px){
    width:90%;
    border-left : none;
}
`
export const Button = styled.button`
cursor:pointer;
background:transparent;
border-radius:12px;
border:1px solid gray;
font-family:Roboto;
font-size:15px;
padding:10px;
@media screen and (max-width:992px){
    font-size:10px;
}
`
export const CustomButton = styled(Button)`
background-color:snow;
margin-right:14px;
`
