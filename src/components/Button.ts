import styled from "styled-components";
import {Theme} from "../styles/Theme";


export const StyleButton = styled.button`
    width: 25%;
    height: 32px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    justify-content: center;
    display: flex;
    align-items: center;
    
    z-index: 0;
    
    
    &:hover {
        &::before {
            height: 100%;
            width: 100%;
        }
    }
    
    &::before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 50%;
        background-color: ${Theme.colors.accent};
        
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: -1;
        border-radius: 10px;
        transform: translateX(-50%);
    }
`
