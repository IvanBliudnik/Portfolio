// @ts-ignore
import React from 'react';
import {FlexContainer} from "../FlexContainer";
import {S} from "./SliderStyles"
export const Slider:React.FC = () => {
    return (
        <S.Slider>
            <FlexContainer>
                <S.Slide>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</S.Text>
                    <S.Name>@Ivan Ivanov</S.Name>
                </S.Slide>
            </FlexContainer>
            <S.Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};

