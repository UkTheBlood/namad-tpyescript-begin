import { useState } from "react";


function App() {

  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {

    // console.log("event target", event.target)
    // console.log("event currentTarget", event.currentTarget)

    // 질문하기
    const {
      currentTarget: { value }  // => currentTarget의 value를 얻는다
    } = event;                  // => event를 연다.
    setValue(value);    // value => string
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value)

    setValue("")
  }

  const Click = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("target", event.target)
    console.log("currentTarget", event.currentTarget)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button onClick={Click}>
          <p>Log in</p>
        </button>
      </form>
    </div>
  );
}

export default App;





// event.target => 자식 요소만 return 즉, Button 안에 있는 자식 요소 Login만 리턴 => 이벤트가 발생한 그 요소
// event.currentTarget => 부모 요소인 button 반환 => EventListener 를 가진 요소

// 오타 같은 것이 났을 때, 이를 인지하지 못하면 나중에 test를 돌릴 때 비로소 발견
// typescript는 위의 것을 미리 막을 수 있음