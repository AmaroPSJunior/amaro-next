import styled from "styled-components";

const CardComponent = styled.div`
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

    &:hover, Text:hover {
        background-color: #888888;

        * {
            color: white;
        }
    }

    * {
       color: #5a5a5a;
    }
`;

export const Card = ({active, children}) => <CardComponent active={active}>{children}</CardComponent>;

const TextComponent = styled.span`
    color: #5a5a5a;

    &:hover {
        color: white;
    }
`;

// export const Text = () => (
//     // <TextComponent />
//     <h2>teste</h2>
// );
  
export const Text = ({children}) => <TextComponent>{children}</TextComponent>;

// export function Text() {
//    return (
//    <TextComponent />
//    )
// };