import styled from 'styled-components'

export const Container = styled.aside`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    div {

        strong {
            font-size: 1.25rem;

        }

        ul {
            margin-top: 1rem;
        }

        li {

            list-style: none;
            margin-left: 1rem;
            

            & + li {
                margin-top: 1.5rem;
            }

            button {
                background-color: var(--purple-200);
                border: 0;
                border-radius: 8px;
                padding: 0.4rem;
                color: var(--white);
                margin-left: 0.6rem;

                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.9);
                }
            }
        }
    }


`