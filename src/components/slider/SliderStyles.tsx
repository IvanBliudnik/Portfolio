import {Theme} from "../../styles/Theme";
import styled from "styled-components";


const Slider = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    //border: 1px solid red;
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

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination,
}