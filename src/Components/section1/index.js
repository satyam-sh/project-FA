import Cards from "../CardCreator"
import {Container,NewItemsContainer,Heading} from "./styled"

const data = [
    {
        bg:"https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=720",
        txt:"Most popular around the world"
    },
    {
        bg:"https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=720",
        txt:"Great for team building"
    },
    {
        bg:"https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=720",
    txt:"Fun for the Family"
    }
    ]

const SectionOne = () =>(
    <Container>
        <Heading>New this week</Heading>
        <NewItemsContainer>
            {data.map(each => <Cards detail={each} key={each.txt}/>)}
        </NewItemsContainer>
       
    </Container>
)

export default SectionOne