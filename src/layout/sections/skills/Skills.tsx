import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./skill/SkillStyles"
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: "html",
        title: "HTML",
        description: "Умения работать в верстке HTML"
    },
    {
        iconId: "css",
        title: "CSS",
        description: "Средний уровень знаний CSS"
    },
    {
        iconId: "react",
        title: "React",
        description: "Базовые знания React"
    },
    {
        iconId: "ts",
        title: "TS",
        description: "Базовые знания TS"
    },
    {
        iconId: "js",
        title: "JS",
        description: "Базовые знания JS"
    },
    {
        iconId: "tilda",
        title: "Tilda",
        description: "Умение работать в Tilda"
    },
    {
        iconId: "pixso",
        title: "Pixso",
        description: "Знания озов работы с Pixso"
    },
    {
        iconId: "sysadmin",
        title: "SysAdmin",
        description: "Администрирование серверов и ПО"
    },
    {
        iconId: "plc",
        title: "PLC",
        description: "Опыт работы с промышленными программируемыми контроллерами"
    },
]
export const Skills = () => {
    return (
        <S.SkillsSection id={"Навыки"}>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexContainer wrap={"wrap"} justify={"center"}>
                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index} title={s.title} description={s.description}/>
                        })}
                    </Fade>
                </FlexContainer>
            </Container>
        </S.SkillsSection>
    );
};

