import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexContainer} from "../../components/FlexContainer";
import {SF} from "./FooterStyle"


const socialItemsData = [
    {
        iconId: "inst",
        link: "https://www.instagram.com/vaniabliudnik/", // Ссылка на Instagram
    },
    {
        iconId: "tg",
        link: "https://t.me/@Johny_47", // Ссылка на Telegram
    },
];

export const Footer:React.FC = () => {
    return (
        <SF.Footer>
            <FlexContainer direction={"column"} align={"center"}>
                <SF.Footer>Bliudnik007@gmail.com</SF.Footer>
                <SF.Footer>+375295807007</SF.Footer>
                <SF.SocialList>
                    {socialItemsData.map((s,index)=>{
                        return <SF.SocialItem>
                            <SF.SocialIconLink key={index}>
                                <Icon height={"25"}
                                      width={"25"} viewBox={"0 -3 20 20"} iconId={s.iconId} link={s.link}/>
                            </SF.SocialIconLink>
                        </SF.SocialItem>
                    })}
                </SF.SocialList>
                <SF.Copyright>@ 2025.08.08 Ivan Bliudnik</SF.Copyright>
            </FlexContainer>
        </SF.Footer>
    );
};


