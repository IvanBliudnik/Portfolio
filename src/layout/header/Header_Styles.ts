import styled from "styled-components";
import {Theme} from "../../styles/Theme";


const Header = styled.header`
  padding: 10px 0;
  background-color: ${Theme.colors.primaryBg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`

export const S = {
    Header
}