import React from "react";
import "../styles/Main.css";

export default function Main() {
  const [count, setCount] = React.useState(0);

  const fruit = "blueberry";
  const age = 26;
  const someFruits = ["blackberry", "apple", "banana"]


  function handleButtonClick(){
    setCount(count + 1)
  }

  return (
    <main>

      {fruit}

      <br />

      {age >= 21 ? "Beer" : "Juice"}

      <br />

      {fruit == 'blueberry' && "it's blue berry time!"}

      {someFruits.map((fruit, index) => <li key={index}>{fruit}</li>)}

      
      <p>Count is: {count}</p>
      <button onClick={handleButtonClick}>Click Me</button>

      <p className='' id="main-copy">
        This is an intro to react Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perferendis, ducimus doloremque. Ratione sint, non
        eaque consequatur maiores consectetur pariatur, voluptates in aliquid
        repellat recusandae hic quo, adipisci sapiente totam rerum! Perferendis
        expedita neque qui asperiores quisquam cum libero laborum
        necessitatibus, harum recusandae facere ratione dolores possimus quod
        quibusdam consequuntur vero dolor. Veniam dolores blanditiis ullam est
        quo aliquid, fugiat delectus?
      </p>
    </main>
  );
}
