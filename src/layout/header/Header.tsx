import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/navigation/navigation";
import {Icon} from "../../components/icon/Icon";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <Icon iconId={"#"}/>


        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    background-color: rgba(67, 180, 65, 0.82);
    display: flex;
    justify-content: space-between;

`