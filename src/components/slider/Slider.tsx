// @ts-ignore
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import  'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./SliderStyles"
import "./../../styles/slider.css"

type SLidePropsType = {
    text: string,
    userName: string,
}

const Slide = (props:SLidePropsType) => {
    return (<S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide userName = {"Ivan Petrov"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore" +
        "                et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
    <Slide userName = {"Ivan Ivanov"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore" +
        "                et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
    <Slide userName = {"Ivan Sidorov"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore" +
        "                et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
];

export const Slider:React.FC = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);