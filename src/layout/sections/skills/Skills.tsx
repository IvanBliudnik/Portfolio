import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./skill/SkillStyles"
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: "codeSvg",
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
        iconId: "TS",
        title: "TS",
        description: "Базовые знания TS"
    },
    {
        iconId: "JS",
        title: "JS",
        description: "Базовые знания JS"
    },
    {
        iconId: "Tilda",
        title: "Tilda",
        description: "Умение работать в Tilda"
    },
    {
        iconId: "Pixso",
        title: "Pixso",
        description: "Знания озов работы с Pixso"
    },
    {
        iconId: "SysAdmin",
        title: "SysAdmin",
        description: "Администрирование серверов и ПО"
    },
    {
        iconId: "PLC",
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

