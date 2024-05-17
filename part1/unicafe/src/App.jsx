import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  console.log(good);
  const [neutral, setNeutral] = useState(0);
  console.log(neutral);
  const [bad, setBad] = useState(0);
  console.log(bad);
  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text={"good"} />
        <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
        <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
        <h1>statistics</h1>
      </div>
    </>
  );
};

export default App;
