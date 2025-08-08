import React from 'react';
import {Link} from "../../../../components/Link";
import {StyleButton} from "../../../../components/Button";
import {SW} from "./WorksStyles"

type WorkPropsType = {
    title: string
    text: string
    src: string
}


export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <SW.Work>
            <SW.ImageWrapper>
                <SW.Image src={props.src} alt=""/>
                <StyleButton>View project</StyleButton>
            </SW.ImageWrapper>
            <SW.Description>
                <SW.Title>{props.title}</SW.Title>
                <SW.Text>{props.text}</SW.Text>
                {/*<Link active href={"#"}>visit</Link>*/}
                <Link href={"https://ivanbliudnik.github.io/coffeeShopMenu-FCC/"}>take a look</Link>
            </SW.Description>
        </SW.Work>
    );
};



