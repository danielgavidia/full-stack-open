import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

import { useState } from "react";

const Display = (props) => {
  return <div>{props.counter}</div>;
};

const Button = (props) = {
  return (
    <div>
      <button onClick={props.onClick}>
      {props.text}
      </button>
    </div>
  )
}

function App() {
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0);

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

  return (
    <div>
      <div>
        <Display counter={counter} />
        <Button
          onClick={increaseByOne}
          text='plus'
          />
      </div>
      <div>
        <button onClick={setToZero}>zero</button>
      </div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
