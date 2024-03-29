import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Menu} from "../menu/Menu";


// передаём Props в сокращённом виде в Menu
// type MenuPropsType = {
//     menuItems: Array<string>
// } //описание 13 строки

export const DesktopMenu:React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <StyleDesktopMenu>
            <Menu menuItems={props.menuItems}/>
        </StyleDesktopMenu>
    );
};

const StyleDesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

    @media ${Theme.media.tablet} {
        display: none;
    }

`


