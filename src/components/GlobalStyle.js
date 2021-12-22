import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";

export default createGlobalStyle`
${normalize}
*, *:before, *:after {
box-sizing: border-box;
}
body {
margin: 0;
overflow:hidden;
overflow-wrap: break-word;
}
`;
