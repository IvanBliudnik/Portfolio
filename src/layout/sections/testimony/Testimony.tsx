import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexContainer} from "../../../components/FlexContainer";
import {IconWrapper} from "../skills/skill/Skill";

export const Testimony = () => {
    return (
        <StyleTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexContainer direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={"quote"}/>
                </IconWrapper>
                <Slider/>
            </FlexContainer>
        </StyleTestimony>
    );
};

const StyleTestimony = styled.section`
  min-height: 50vh;
  background-color: #91d2a5;
  
  ${IconWrapper} {
    margin: 32px 0 72px;
  }
`
