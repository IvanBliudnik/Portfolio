import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexContainer} from "../../components/FlexContainer";
import {Theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer direction={"column"} align={"center"}>
                <Name>Bliudnik007@gmail.com</Name>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"20px"} width={"20px"} viewBox={"0 0 20px 20px"} iconId={"inst"}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"20px"} width={"20px"} viewBox={"0 0 20px 20px"} iconId={"tg"}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"20px"} width={"20px"} viewBox={"0 0 20px 20px"} iconId={"vk"}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>
                <Copyright>@ 2024.03.07 Ivan Bliudnik</Copyright>
            </FlexContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.primaryBg};
    padding: 40px 0; // отступы всего Footer

`
const Name = styled.span`
    font-family: Josefin Sans, sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItem = styled.li`

`
const SocialIconLink = styled.a`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background: rgba(255, 255, 255, 0.1);

    // выравниваем по ценрам прозрачный кружок в ссылке
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${
            Theme.colors.accent
    };
    
    &:hover {
        color: ${Theme.colors.primaryBg};
        transform: translateY(-4px); //движение вверх (задаётся отрицательным значением)
    }
`
const Copyright = styled.small`
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    opacity: 0.5;
`
