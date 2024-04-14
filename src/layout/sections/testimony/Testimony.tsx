import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexContainer} from "../../../components/FlexContainer";
import {S} from "../skills/skill/SkillStyles"

export const Testimony:React.FC = () => {
    return (
        <StyleTestimony id={"testimony"}>
            <SectionTitle>Testimony</SectionTitle>
            <FlexContainer direction={"column"} align={"center"}>
                <S.IconWrapper>
                    <Icon iconId={"quote"}/>
                </S.IconWrapper>
                <Slider/>
            </FlexContainer>
        </StyleTestimony>
    );
};

const StyleTestimony = styled.section`
  min-height: 50vh;
  background-color: #91d2a5;
  
  ${S.IconWrapper} {
    margin: 32px 0 72px;
  }
`
