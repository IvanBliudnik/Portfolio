import React from 'react';
import photo from "./../../../assets/images/photo.webp"
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {S} from "./MainStyles"
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexContainer align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.NameTitle><span>I am Ivan Bliudnik</span></S.NameTitle>

                        <S.MainTitle>
                            {/*для CEO продвижения скрин ридера нужно сделать так*/}
                            <p>'I am student of it-incubator', "Learning HTML, CSS"</p>
                            <Typewriter
                                options={{
                                    strings: ['I am student of it-incubator', "Learning HTML, CSS"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50, //скорость печати текста
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexContainer>
            </Container>
        </S.Main>
    );
};

