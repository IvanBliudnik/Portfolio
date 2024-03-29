import {Logo} from "../../components/logo/logo";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import React from "react";
import {S} from "./Header_Styles"


const items = ["Home", "Skills", "Works", "Testimony", "Contact"]
export const Header:React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexContainer justify={"space-between"} align={"center"}>
                    <Logo/>
                   <DesktopMenu menuItems={items}/>
                   <MobileMenu menuItems={items}/>
                </FlexContainer>
            </Container>
        </S.Header>
    );
};

