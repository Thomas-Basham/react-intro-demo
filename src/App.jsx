import { useState } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  // const [state, setState] = useState();
  const [username, setUsername] = useState("hello world");

  function handleSetUsername(event) {
    event.preventDefault();
    setUsername(event.target.value);
  }

  return (
    <>
      <Header username={username} />
      <label htmlFor="username-input">Username: </label>
      <input
        onChange={handleSetUsername}
        type="text"
        name="username-input"
        id="username-input"
      />

      <Main username={username} />

      <Footer username={username} />
    </>
  );
}

export default App;
