import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
    min-height: 100vh;
    background-color: ${Theme.colors.secondaryBg};
    display: flex;
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;

    &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: 4px solid ${Theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${Theme.media.mobile} {
            top: -17px;
            left: 20px;
            width: 314px;
            height: 414px;
        }
    }`

const Photo = styled.img`
    width: 360px;
    height: 420px;
    object-fit: cover;
    margin-right: 20px;

    @media ${Theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`


const MainTitle = styled.h1`
    ${font({weight: 400, Fmax: 27, Fmin: 20})}
    p {
      display: none;
    }
`

const NameTitle = styled.h2`
    ${font({
        family: "Josefin Sans, sans-serif",
        weight: 700,
        Fmax: 50,
        Fmin: 36
    })}
    margin: 10px 0;
    letter-spacing: 0.05em;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

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

    @media ${Theme.media.mobile} {
        margin: 15px 0 22px;
    }
`
const SmallText = styled.h2`
    ${font({weight: 400, Fmax: 27, Fmin: 20})}
`

export const S = {
        Main,
        PhotoWrapper,
        Photo,
        MainTitle,
        NameTitle,
        SmallText,
}