import React, { useState } from "react";

/* react-hook-form의 register란
register는 onClick, onChange, onBlur와 같은 이벤트 리스너 함수를 리턴한다. 
그러므로 ...와 같은 연산자를 사용하여 리턴된 함수를 입력 요소의 이벤트 리스너로 설정할 수 있다.

react-hook-form의 handleSubmit란
handleSubmit은 폼의 유효성 검사를 통과하면 제출된 데이터를 처리하는 함수이다.

react-hook-form의 errors란
errors는 폼의 유효성 검사를 통과하지 못한 입력 요소의 오류 메시지를 포함하는 객체이다.

react-hook-form의 watch란
watch는 지정된 입력 요소의 값을 모니터링하는 함수이다.

react-hook-form의 setValue란
setValue는 입력 요소의 값을 동적으로 설정하는 함수이다.

react-hook-form의 getValues란
getValues는 폼의 모든 입력 요소의 값을 가져오는 함수이다.*/

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
