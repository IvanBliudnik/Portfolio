import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../FlexContainer";
import {Theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexContainer>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <Name>@Ivan Ivanov</Name>
                </Slide>
            </FlexContainer>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Slide = styled.div`
    text-align: center;
`
const Text = styled.p`

`
const Name = styled.span`
font-family: Josefin Sans, sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        margin: 5px;
        background-color: ${Theme.colors.font};
      
        border-radius: 20px;
      
      & + span {
        margin-left: 5px;
      }

      &.active {
        background-color: ${Theme.colors.accent};
        margin-left: 5px;
        width: 20px;
      }
    }
`