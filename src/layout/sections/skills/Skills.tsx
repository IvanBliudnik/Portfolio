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
        description: "Супер разметка HTML"
    },
    {
        iconId: "css",
        title: "CSS",
        description: "Супер разметка HTML"
    },
    {
        iconId: "react",
        title: "React",
        description: "Супер разметка HTML"
    },
    {
        iconId: "TS",
        title: "TS",
        description: "Супер разметка HTML"
    },
    {
        iconId: "figma",
        title: "Figma",
        description: "Супер разметка HTML"
    },
    {
        iconId: "styledcomponents",
        title: "Styled Components",
        description: "Очень сложная штуковина"
    },
]
export const Skills = () => {
    return (
        <S.SkillsSection id={"skills"}>
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

