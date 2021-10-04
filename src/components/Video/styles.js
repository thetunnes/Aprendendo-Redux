import styled from "styled-components";

export const Container = styled.div`

    margin: 0 auto;
    text-align: center;


    @media (max-width: 640px) {

        margin-top: 3rem;
    }

    strong b {
        color: #65d462;
    }

    span {
        background: var(--white);
        color: #333;
        padding: 0.2rem;
        border-radius: 8px;

        b {

        font-weight: normal;
        color: var(--purple-200);
    }
    }
`