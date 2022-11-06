import {Navbar,LogoLarge,LogoSmall, NavItems,NavListItems,Anchor,WorldLogo,Button,HamLogo,ProfileLogo,Container,ButtonHam} from "./styled"

const Header = () =>(
    <Navbar>
        <LogoLarge src ="https://res.cloudinary.com/dtdoc35lb/image/upload/v1667665167/airbnb/Airbnb_logo_hda7uh.png" alt ="logo" />
        <LogoSmall src= "https://res.cloudinary.com/dtdoc35lb/image/upload/v1667665161/airbnb/5e10d70b73f61c76194ef63da8f5c22a_cyitf6.jpg" alt="logo" />
        <NavItems>
            <NavListItems>
                <Anchor href="#">Become a host</Anchor>
            </NavListItems>
            <NavListItems>
               <Button> <WorldLogo /></Button>
            </NavListItems>
            <NavListItems>
                <Container>
                <ButtonHam>
                    <HamLogo />
                </ButtonHam>
                <ButtonHam>
                    <ProfileLogo />
                </ButtonHam>
                </Container>
            </NavListItems>
            
        </NavItems>
    </Navbar>
)

export default  Header