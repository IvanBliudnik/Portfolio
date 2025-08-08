import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/IMG_0969.webp"
import coffee from "../../../assets/images/IMG_0980.webp"
import {Container} from "../../../components/Container";
import {SW} from "./work/WorksStyles"
import {TabsStatusType} from "./tabMenu/TabMenu";
import {AnimatePresence, motion} from "framer-motion"


const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
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
        type: "spa",
        id: 1,
    },
    {
        title: "ShopMenu",
        text: "coffeeshop menu",
        src: coffee,
        type: "react",
        id: 2,
    },
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: socialImg,
        type: "spa",
        id: 3,
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enimLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: coffee,
        type: "react",
        id: 4,
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
        <SW.Works id={"Мои работы"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexContainer justify={"center"} align={"flex-start"} wrap={"wrap"}>

                    <AnimatePresence>
                        {filteredWorks.map((w, index) => {
                            return (
                                <motion.div style={{width: "400px", flexGrow:1, maxWidth:"540px"}}
                                    layout
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                >
                                    <Work title={w.title}
                                          text={w.text}
                                          src={w.src}
                                          key={w.id}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexContainer>
            </Container>
        </SW.Works>
    );
};



