import React from 'react';
import photo from "./../../../assets/images/photo.webp"
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {S} from "./MainStyles"

export const Main:React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexContainer align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.NameTitle><span>I am Ivan Bliudnik</span></S.NameTitle>
                        <S.MainTitle>Student IT-Incubator</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexContainer>
            </Container>
        </S.Main>
    );
};

