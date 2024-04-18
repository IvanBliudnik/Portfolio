import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";

const SkillsSection = styled.section`
    position: relative;
`
const Skill = styled.div`
    width: 330px;
    flex-grow: 1; //каждый элемент skill будет занимать всё свободное место на странице
    padding: 62px 20px 40px;
    
    @media ${Theme.media.mobile} {
        padding: 62px 0 40px;
    }
`
const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`
const SkillText = styled.p`
    text-align: center;
`

const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        transform: rotate(45.00deg) translate(-50%, -50%);
        background-color: #FFFFFF1A;

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`

export const S = {
    Skill,
    SkillTitle,
    SkillText,
    IconWrapper,
    SkillsSection,
}