import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkillsSection>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexContainer wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"codeSvg"} title={"HTML"} description={"Супер разметка HTML"}/>
                    <Skill iconId={"css"} title={"CSS"} description={"Красивое оформление CSS"}/>
                    <Skill iconId={"react"} title={"React"} description={"Прекрасный разработчик в среде React"}/>
                    <Skill iconId={"TS"} title={"TS"} description={"Высокий уровень программирования в среде Type Script"}/>
                    <Skill iconId={"figma"} title={"figma"} description={"Умение работать в среде Figma"}/>
                    <Skill iconId={"styledcomponents"} title={"Styled Components"}
                           description={"Очень сложная штуковина"}/>
                </FlexContainer>
            </Container>
        </StyledSkillsSection>
    );
};

const StyledSkillsSection = styled.section`

`