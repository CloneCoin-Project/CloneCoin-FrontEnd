import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body,
  #root,
  #root > * {
    height: 100%;
  }
`;
export default GlobalStyle;