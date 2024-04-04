import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj1_1.webp"
import timerImg from "../../../assets/images/proj2_1.webp"
import {Container} from "../../../components/Container";
import {SW} from "./work/WorksStyles"


const worksItems = ["All", "Landing Page", "React", "SPA"]


const WorksData = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: socialImg
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enimLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg
    },
]

export const Works = () => {
    return (
        <SW.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexContainer justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {WorksData.map((w, index) => {
                        return <Work title={w.title} text={w.text} src={w.src} key={index}/>
                    })}
                </FlexContainer>
            </Container>
        </SW.Works>
    );
};



