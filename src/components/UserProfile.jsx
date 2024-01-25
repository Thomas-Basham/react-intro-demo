import React from "react";

export default function UserProfile({ name, email, bio }) {
  return (
    <div
      style={{
        border: "solid 1px white",
        backgroundColor: "tan",
        width: "50%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "5",
      }}
    >
      <p>Name: {name} </p>
      <p>Email: {email} </p>
      <p>Bio: {bio} </p>
    </div>
  );
}
