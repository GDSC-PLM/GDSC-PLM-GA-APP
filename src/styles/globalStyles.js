import { createGlobalStyle } from "styled-components";

import ProductSans from "../assets/fonts/ProductSans-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
    /* fonts */
    @font-face {
        font-family: 'Google Sans';
        src: url(${ProductSans}) format('truetype');
    }

    /* global styles */
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        --gdsc-light-blue: #E3F2FD;
        --gdsc-core-blue: #498AF4;
        --gdsc-core-red: #EA4335;
        --gdsc-core-green: #61B979;
        --gdsc-core-yellow: #FBBF0E;

        --gdsc-text-primary: #434343;
        --gdsc-text-body: #676C72;
        --gdsc-text-btn: #fff;
    }
`;
