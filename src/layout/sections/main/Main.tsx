import React from 'react';
import styled from "styled-components";
import photo from "./../../../assets/images/photo.webp"
import {FlexContainer} from "../../../components/FlexContainer";

export const Main = () => {
    return (
        <StyledMain>
            <FlexContainer align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <NameTitle>I am Svetlana Dyablo</NameTitle>
                    <MainTitle>Web Developer</MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexContainer>
        </StyledMain>
    );
};

const StyledMain = styled.div`
min-height: 100vh;
    background-color: bisque;
`



const Photo = styled.img`
    width: 350px;
    height: 450px;
    object-fit: cover;
`


const MainTitle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`

const NameTitle = styled.h2`
    
`