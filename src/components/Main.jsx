import { useEffect, useState } from "react";
import "../styles/Main.css";

export default function Main() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setState(json);
      });
  }, []);

  const posts = state.map((post, index) => {
    return (
      <div
        key={index}
        style={{
          border: "solid 1px white",
          backgroundColor: "tan",
          width: "50%",
          margin: "20px auto",
          padding: "3em",
          display: "flex",
          flexDirection: "column",
          gap: "5",
        }}
      >
        <h3> {post.title} </h3>
        <p> {post.body} </p>
      </div>
    );
  });

  return (
    <main>
      <h2>Posts: </h2>
      {posts}
    </main>
  );
}
