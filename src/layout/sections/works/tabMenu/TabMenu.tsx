import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


// передаём Props в сокращённом виде в Menu
// type MenuPropsType = {
//     menuItems: Array<string>
// } //описание 13 строки

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item,index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        //gap: 20px;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        border: 2px solid #194cd2;
        margin: 0 auto 40px;
    }
`

const ListItem = styled.li`

`
