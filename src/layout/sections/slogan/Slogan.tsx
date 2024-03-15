import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyleButton} from "../../../components/Button";
import {Theme} from "../../../styles/Theme";
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexContainer direction={"column"} align={"center"}>
                    <SectionTitle>Just Do It</SectionTitle>
                    <StyleButton>Hire Me</StyleButton>
                </FlexContainer>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: ${Theme.colors.secondaryBg};
`
