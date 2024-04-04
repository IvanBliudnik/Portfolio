import React from 'react';
import {StyleButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {SC} from "./StyleContacts"

export const Contact:React.FC = () => {
    return (
        <SC.Contacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <SC.Form>
                    <SC.Field placeholder={"Name"}/>
                    <SC.Field placeholder={"Surname"}/>
                    <SC.Field as={"textarea"} placeholder={"Message"}/>
                    <StyleButton type={"submit"}>Send message</StyleButton>
                </SC.Form>
            </Container>
        </SC.Contacts>
    );
};


