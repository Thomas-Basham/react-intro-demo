import { useState } from "react";

export default function MessageDisplay() {
  const [text, setText] = useState("");

  function handleInput(event) {
    event.preventDefault();
    setText(event.target.value);
  }

  return (
    <div>
      <h2>{text}</h2>
      <label htmlFor="message">Type a message: </label>
      <input onChange={handleInput} type="text" name="message" id="message" />
    </div>
  );
}
