import React from "react";
import "../styles/Main.css";
import MessageDisplay from "./MessageDisplay";

export default function Main({ username }) {
  return (
    <main>
      <h2> {username} </h2>

      <div className="" id="main-copy">
        <MessageDisplay />
        <div className="exercise">
          <h2>React Warm-Up Exercise: Custom Message Component</h2>
          <p>
            <strong>Objective:</strong> Build a simple React component that
            displays a customizable message.
          </p>

          <p>
            <strong>Requirements:</strong>
          </p>
          <ul>
            <li>
              Create a new component named <code>MessageDisplay</code>.
            </li>
            <li>
              Use the <code>useState</code> hook to manage the message text,
              initialized with "Hello, React!"
            </li>
            <li>Add a text input field to update the message.</li>
            <li>
              Display the message in a <code>&lt;div&gt;</code> or{" "}
              <code>&lt;p&gt;</code> tag.
            </li>
            <li>
              When the user types in the input, the displayed message should
              update in real-time.
            </li>
          </ul>

          <p>
            <strong>Steps:</strong>
          </p>
          <ol>
            <li>
              Create a functional component <code>MessageDisplay</code>.
            </li>
            <li>
              Implement a <code>useState</code> hook for the message text.
            </li>
            <li>Render the message and a text input in the component.</li>
            <li>
              Handle the input change to update the message as the user types.
            </li>
          </ol>

          <p>
            This exercise will help you get familiar with creating components,
            managing state, and handling user input in React.
          </p>
        </div>
      </div>
    </main>
  );
}
