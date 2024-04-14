import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj1_1.webp"
import timerImg from "../../../assets/images/proj2_1.webp"
import {Container} from "../../../components/Container";
import {SW} from "./work/WorksStyles"
import {TabsStatusType} from "./tabMenu/TabMenu";


const tabsItems: Array<{ title: string, status: TabsStatusType}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing Page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "SPA",
        status: "spa"
    },
]

const worksData = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: socialImg,
        type: "spa"
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enimLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "react"
    },
]

export const Works = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value)
    }

    return (
        <SW.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus = {changeFilterStatus}
                         currentFilterStatus = {currentFilterStatus}/>
                <FlexContainer justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filteredWorks.map((w, index) => {
                        return <Work title={w.title} text={w.text} src={w.src} key={index}/>
                    })}
                </FlexContainer>
            </Container>
        </SW.Works>
    );
};



