import {StyleButton} from "../../../../components/Button";
import {Theme} from "../../../../styles/Theme";
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {FlexContainer} from "../../../../components/FlexContainer";

const Works = styled.section`
    position: relative;
    
    ${FlexContainer} {
        gap: 30px;
    }
`

const Work = styled.div`
    //width: 330px;
    background-color: ${Theme.colors.secondaryBg};
    //flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
    
    // @media ${Theme.media.desktop} {
    //     max-width: 540px;
    // }
`

const ImageWrapper = styled.div`
    position: relative;
    
    ${StyleButton} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -40%);
        transition: ${Theme.animation.transition};

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        backdrop-filter: blur(2px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: ${Theme.animation.transition};
    }
    
    &:hover {
        &::before {
            opacity: 1;
        }
        ${StyleButton} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
    
@media ${Theme.media.tablet} {
    &::before {
        opacity: 1;
    }
    ${StyleButton} {
        opacity: 1;
    }
}
`


const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`

`
const Text = styled.p`
    margin: 14px 0 10px;
`
const Description = styled.div`
    padding: 25px 20px;
`


export const SW = {
    Work,
    Works,
    Image,
    Title,
    Text,
    Description,
    ImageWrapper,
}