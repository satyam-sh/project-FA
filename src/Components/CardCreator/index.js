import { CardDetailsContainer,CardsItem,Para,Heading ,ShowButton,HeadContainer} from "./styled"
const Cards = (props) =>{
        const {detail} = props

        return (
                <CardsItem bg={detail.bg}>
                    <CardDetailsContainer>
                        <HeadContainer>
                        <Para>Collection</Para>
                        <Heading>{detail.txt}</Heading>
                        </HeadContainer>
                        <ShowButton>Show All</ShowButton>
                    </CardDetailsContainer>
                    
                </CardsItem>
        )
}
    


export default Cards