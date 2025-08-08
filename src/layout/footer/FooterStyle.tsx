import {Theme} from "../../styles/Theme";
import styled from "styled-components";


const Footer = styled.footer`
    background-color: ${Theme.colors.primaryBg};
    padding: 40px 0; // отступы всего Footer
    position: relative;
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
    transition: ${Theme.animation.transition};
     color: ${Theme.colors.accent};
    
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

export const SF = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialIconLink,
    Copyright,
}