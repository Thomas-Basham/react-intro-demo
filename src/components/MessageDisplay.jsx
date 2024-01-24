import { useState } from "react";

export default function MessageDisplay() {
  const [text, setText] = useState("Hello, React!");

  function handleInput(event) {
    event.preventDefault();
    setText(event.target.value);
  }

  return (
    <div>
      <h2>{text}</h2>
      <input onChange={handleInput} type="text" name="message" id="message" />
    </div>
  );
}
