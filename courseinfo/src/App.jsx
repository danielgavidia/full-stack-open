import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  setTimeout(() => setCounter(counter + 1), 1000);
  return (
    <div>
      <div>{counter}</div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
