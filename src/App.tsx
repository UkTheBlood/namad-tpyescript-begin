import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`

function App() {

  return (
    <Container>
      <H1>protected</H1>
    </Container>
  );
}

export default App;



// event.target => 자식 요소만 return 즉, Button 안에 있는 자식 요소 Login만 리턴 => 이벤트가 발생한 그 요소
// event.currentTarget => 부모 요소인 button 반환 => EventListener 를 가진 요소

// 오타 같은 것이 났을 때, 이를 인지하지 못하면 나중에 test를 돌릴 때 비로소 발견
// typescript는 위의 것을 미리 막을 수 있음