import styled from "styled-components";

// interface ContainerProps {
//     bgColor: string;
//     borderColor: string;
// }

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${(props) => props.borderColor};
`

interface CircleProps {
    bgColor: string;        // 무조건 있어야 함
    borderColor?: string;   // optional props => 있을 수도 있고, 없을 수도 있음
    text?: string;
}

function Circle({ bgColor, borderColor, text = "default text"}: CircleProps) {
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    )
}

export default Circle;

// interface PlayerShape {
//     name: string;
//     age: number;
// }


// const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old`;

// sayHello({name:"nice", age: 12})
// sayHello({name:"hi", age: 12, hello:1})