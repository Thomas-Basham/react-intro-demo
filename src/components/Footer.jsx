import React from "react";

export default function Footer({ username }) {
  return (
    <footer>
      <h2> {username} </h2>

      <p>&copy; Codex Academy</p>
    </footer>
  );
}
