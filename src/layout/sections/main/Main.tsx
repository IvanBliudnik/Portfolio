import React from 'react';
import styled from "styled-components";
import photo from "./../../../assets/images/photo.webp"
import {FlexContainer} from "../../../components/FlexContainer";
import {Theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexContainer align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <NameTitle><span>I am Ivan Bliudnik</span></NameTitle>
                        <MainTitle>Student IT-Incubator</MainTitle>
                    </div>

                    <PhotoWrapper>
                    <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexContainer>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: ${Theme.colors.secondaryBg};
    display: flex;
`
const PhotoWrapper = styled.div`
position: relative;
z-index: 0;
&::before {
    content: "";
    width: 360px ;
    height: 470px;
    border: 5px solid ${Theme.colors.accent};
    
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
}`

const Photo = styled.img`
    width: 360px;
    height: 420px;
    object-fit: cover;
`


const MainTitle = styled.h1`

    font-size: 27px;
    font-weight: 400;
    line-height: 1.2;


`

const NameTitle = styled.h2`
    font-family: Josefin Sans, sans-serif;
    font-size: 50px;
    font-weight: 700;
    line-height: 1.2;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        &::before {
            
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${Theme.colors.accent};
            
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }

`
const SmallText = styled.h2`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
`