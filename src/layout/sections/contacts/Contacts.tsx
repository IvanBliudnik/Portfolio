import React, {ElementRef, useRef} from 'react';
import {StyleButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {SC} from "./StyleContacts"
import {FlexContainer} from "../../../components/FlexContainer";
import emailjs from '@emailjs/browser';

export const Contact:React.FC = () => {
    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();


        if(!form.current) return
        emailjs
            .sendForm('service_r96tfyc', 'template_p5uhfnx', form.current, {
                publicKey: 'trNvFa6zNSzqqrtb0',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };
    return (
        <SC.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <FlexContainer>
                <SC.Form ref={form} onSubmit={sendEmail}>
                    <SC.Field required placeholder={"Name"} name = {"user_name"}/>
                    <SC.Field required placeholder={"email"} name = {"email"}/>
                    <SC.Field required placeholder={"subject"} name = {"subject"}/>
                    <SC.Field required as={"textarea"} placeholder={"Message"} name = {"message"}/>
                    <StyleButton type={"submit"}>Send message</StyleButton>
                </SC.Form>
                </FlexContainer>
            </Container>
        </SC.Contacts>
    );
};


