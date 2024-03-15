import React from 'react';
import styled from "styled-components";
import {StyleButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {SectionTitle} from "../../../components/SectionTitle";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"Name"}/>
                    <Field placeholder={"Surname"}/>
                    <Field as={"textarea"} placeholder={"Message"}/>
                    <StyleButton type={"submit"}>Send message</StyleButton>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea {
        resize: none; // запрет изменения поля текстареа в Styled form 
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;
    background-color: ${Theme.colors.secondaryBg};
    border: 1px solid ${Theme.colors.borderColor};
    padding: 7px 15px;
    
    font-family: Poppins,sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
    
    color: ${Theme.colors.font};
    
    &::placeholder {
        color: ${Theme.colors.placeholder};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${Theme.colors.borderColor};
    }
    
`
