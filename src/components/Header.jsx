import React from "react";

export default function Header({ username }) {
  return (
    <header>
      <h1>Intro To react</h1>
      <h2> {username} </h2>
    </header>
  );
}
