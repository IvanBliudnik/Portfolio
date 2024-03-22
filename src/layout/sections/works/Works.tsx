import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj1_1.webp"
import timerImg from "../../../assets/images/proj2_1.webp"
import {Container} from "../../../components/Container";


const worksItems = ["All", "Landing Page", "React", "SPA"]


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexContainer justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <Work title={"Social Network"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"} src={socialImg}/>
                    <Work title={"Timer"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enimLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"} src={timerImg}/>
                </FlexContainer>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexContainer} {
        gap: 30px;
    }
`

