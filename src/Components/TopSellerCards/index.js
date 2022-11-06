
import {CardItem,Icon,Details, StarIcon} from "./styled"


const TopSellerCard = (props) =>{
    const {detail} =props

    return (
            <Details>
            <CardItem bg={detail.bg}>
                <Icon />
            </CardItem>
                <StarIcon /> 
                <p style={{lineHeight:0}}>pasta with grandma</p>
                <p><span style={{fontWeight:"bold",marginTop:"0px"}}>From Rs. 2694/</span>person</p>
                </Details>  
    )
}
export default TopSellerCard