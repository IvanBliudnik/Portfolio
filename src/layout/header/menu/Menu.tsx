import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

export const Menu:React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {props.menuItems.map((item, index) => {
                return <ListItem key={index}>
                    <Link href="">
                        {item}
                        <Mask>
                                <span>
                                {item}
                            </span>
                        </Mask>
                        <Mask>
                                <span>
                                {item}
                            </span>
                        </Mask>
                    </Link>
                </ListItem>
            })}
        </ul>
    );
};

const Link = styled.a`
    font-family: "Josefin Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;
    color: transparent;
    text-align: center;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    //outline: 1px  solid  rebeccapurple;
    color: ${Theme.colors.accent};

    & + & {
        top: 50%;

        span {
            transform: translateY(-50%);
            display: inline-block;
        }
    }
`

const ListItem = styled.li`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${Theme.colors.font};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(0.75);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${Theme.colors.font};

            ${Mask} + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }

    }
`
