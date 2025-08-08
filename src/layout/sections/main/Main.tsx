import React from 'react';
import Photo from "../../../assets/images/IMG_5300.webp"
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {S} from "./MainStyles"
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main:React.FC = () => {
    return (
        <S.Main id={"Главная"}>
            <Container>
                <FlexContainer align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Привет</S.SmallText>
                        <S.NameTitle><span>Я Иван Блюдник</span></S.NameTitle>

                        <S.MainTitle>
                            {/*для CEO продвижения скрин ридера нужно сделать так*/}
                            <p>"Обучаюсь на курсах FrontEnd разработки"</p>
                            <Typewriter
                                options={{
                                    strings: ["Обучаюсь на курсах FrontEnd разработки"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50, //скорость печати текста
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={Photo} alt="моё фото"/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexContainer>
            </Container>
        </S.Main>
    );
};

