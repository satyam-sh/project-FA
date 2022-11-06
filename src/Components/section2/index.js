
import {Container,FilterContainer,TodoContainer,Button,CustomButton} from "./styled"
const btnList = [
    {
    txt:"Drinks"
    },
    {
    txt:"Animals"
    },
    {
    txt:"Places"
    },
    {
    txt:"Music"
    },
    {
    txt:"Wellness"
    },{
    txt:"Social-Impact"
    },
    {
    txt:"Fitness"
    },{
    txt:"Dance"
    },
    {
    
    txt:"Baking"
    }
    ]


const SectionTwo = () =>{
    const ButtonMapper = (txt) => <CustomButton>{txt}</CustomButton>

    return (

        <Container>
            <FilterContainer>
                <Button>Groups</Button>
                <Button>Filter by Groups</Button>
                <Button>Dates</Button>
            </FilterContainer>
            <TodoContainer>
                {btnList.map(each => ButtonMapper(each.txt))}
            </TodoContainer>
        </Container>
    
    )
}
export default SectionTwo