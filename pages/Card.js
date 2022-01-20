import styled from "styled-components";

export const Card = styled.div`
    background-color: ${(props) => (props.active && "red")};
    margin: 1rem;
    padding: 2.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 3px solid #5a5a5a;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;

    &:hover {
        background-color: #888888;

        * {
            color: white;
        }
    }

    * {
       color: #5a5a5a;
    }
`;

export const Text = styled.span`
    color: #5a5a5a;

    &:hover {
        color: white;
    }
`;
