import React from 'react';
import {StyleButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {SC} from "./StyleContacts"
import {FlexContainer} from "../../../components/FlexContainer";

export const Contact:React.FC = () => {
    return (
        <SC.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <FlexContainer>
                <SC.Form>
                    <SC.Field placeholder={"Name"}/>
                    <SC.Field placeholder={"Surname"}/>
                    <SC.Field as={"textarea"} placeholder={"Message"}/>
                    <StyleButton type={"submit"}>Send message</StyleButton>
                </SC.Form>
                </FlexContainer>
            </Container>
        </SC.Contacts>
    );
};


