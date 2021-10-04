import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {

        --white: #FFFFFF;
        --dark: #333333;

        --gray-100: #CDDCDD;
        --gray-200: #ABBABB;

        --purple-200: #7752BD;

 
    }

    body {
        font: 1rem "Roboto", sans-serif;
        background: var(--dark);
        color: var(--white);
    }

    button {
        cursor: pointer;
        
    }

    .App {
        max-width: 768px;
        margin: 2rem auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2%;

        @media (max-width: 640px) {

            display: block;
        }

    }
`
export default GlobalStyle