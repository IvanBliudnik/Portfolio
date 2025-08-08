import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import cgphoto from "../../../assets/images/44815.970.webp"
import coffee from "../../../assets/images/napitki-iz-kofe-1-big.webp"
import ggsizPhoto from "../../../assets/images/ggsizPhoto.webp"
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
        title: "JS",
        status: "JS"
    },
    {
        title: "SPA",
        status: "spa"
    },
]

const worksData = [
    {
        title: "CaveGame",
        text: "FirstSimpleGame",
        src: cgphoto,
        type: "JS",
        id: 1,
        link: {label: "Сыграть в CaveGame", url: "https://www.cavegame.com/"},
    },
    {
        title: "ShopMenu",
        text: "coffeeshop menu",
        src: coffee,
        type: "landing",
        id: 2,
        link: {label: "Посмотреть меню", url: "https://www.coffeeshop.com/"},
    },
    {
        title: "MyWorkSite",
        text: "My first work site made on Tilda",
        src: ggsizPhoto,
        type: "spa",
        id: 3,
        link: {label: "Посетить мой сайт", url: "https://gsiztest.tilda.ws/"},
    },
]

export const Works = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "JS") {
        filteredWorks = worksData.filter(work => work.type === "JS")
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
                                <motion.div style={{width: "400px", flexGrow: 1, maxWidth: "540px"}}
                                            layout
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            key={w.id}
                                >
                                    <Work title={w.title}
                                          text={w.text}
                                          src={w.src}
                                          key={w.id}
                                          link={w.link}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexContainer>
            </Container>
        </SW.Works>
    );
};



