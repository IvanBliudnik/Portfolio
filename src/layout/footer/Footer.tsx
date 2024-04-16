import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexContainer} from "../../components/FlexContainer";
import {SF} from "./FooterStyle"


const socialItemsData = [
    {
        iconId:"inst",
    },
    {
        iconId:"tg",
    },
    {
        iconId:"vk",
    },
]

export const Footer:React.FC = () => {
    return (
        <SF.Footer>
            <FlexContainer direction={"column"} align={"center"}>
                <SF.Footer>Bliudnik007@gmail.com</SF.Footer>
                <SF.SocialList>
                    {socialItemsData.map((s,index)=>{
                        return <SF.SocialItem>
                            <SF.SocialIconLink key={index}>
                                <Icon height={"20"}
                                      width={"20"} viewBox={"0 0 20 20"} iconId={s.iconId}/>
                            </SF.SocialIconLink>
                        </SF.SocialItem>
                    })}
                </SF.SocialList>
                <SF.Copyright>@ 2024.03.07 Ivan Bliudnik</SF.Copyright>
            </FlexContainer>
        </SF.Footer>
    );
};


