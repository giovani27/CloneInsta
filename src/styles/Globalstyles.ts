import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
     margin: 0;
     padding: 0 ;
     box-sizing: border-box;
 }
 *,input, button {
     border: 0;
     outline: 0;
     font-family: 'Roboto', sans-serif;
 }
 html, body, :root {
     height: 100%;
     background-color: #fafafa

 }

`;
