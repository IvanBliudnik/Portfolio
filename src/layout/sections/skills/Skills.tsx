import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkillsSection>
            <SectionTitle>My skills</SectionTitle>
            <FlexContainer wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"codeSvg"} title={"HTML"} discription={"Супер разметка HTML"}/>
                <Skill iconId={"css"} title={"CSS"} discription={"Красивое оформление CSS"}/>
                <Skill iconId={"react"} title={"React"} discription={"Прекрасный разработчик в среде React"}/>
                <Skill iconId={"TS"} title={"TS"} discription={"Высокий уровень программирования в среде Type Script"}/>
                <Skill iconId={"figma"} title={"figma"} discription={"Умение работать в среде Figma"}/>
                <Skill iconId={"StyledComponents"} title={"StyledComponents"} discription={"Очень сложная штуковина"}/>
            </FlexContainer>
        </StyledSkillsSection>
    );
};

const StyledSkillsSection = styled.section`
    background-color: cadetblue;
    min-height: 100vh; //всегда использовать это значение 
`