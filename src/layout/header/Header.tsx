import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {Theme} from "../../styles/Theme";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";



const items = ["Home", "Skills", "Works", "Testimony", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify={"space-between"} align={"center"}>
                    <Logo/>
                   <HeaderMenu menuItems={items}/>
                   <MobileMenu menuItems={items}/>
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding: 20px 0;
  background-color: ${Theme.colors.primaryBg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`