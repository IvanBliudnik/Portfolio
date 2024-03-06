import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyleMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Works</a>
                </li>
                <li>
                    <a href="">Testimony</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </StyleMenu>
    );
};

const StyleMenu = styled.nav`
ul {
    display: flex;
    gap: 30px;
}
`