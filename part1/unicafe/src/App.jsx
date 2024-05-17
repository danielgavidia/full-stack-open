import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = (props) => {
  if (props.clicks !== 0) {
    return (
      <>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.total}</p>
        <p>average {props.score / props.total}</p>
        <p>positive {(props.good / props.total) * 100} %</p>
      </>
    );
  }
  return <p>No feedback given</p>;
};

const App = () => {
  const [good, setGood] = useState(0);
  console.log(good);
  const [neutral, setNeutral] = useState(0);
  console.log(neutral);
  const [bad, setBad] = useState(0);
  console.log(bad);
  const [total, setTotal] = useState(0);
  console.log(total);
  const [score, setScore] = useState(0);
  console.log(score);
  const [clicks, setClicks] = useState(0);
  console.log(clicks);

  const handleSetGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
    setScore(score + 1);
    setClicks(clicks + 1);
  };
  const handleSetNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + updatedNeutral + bad);
    setScore(score + 0);
    setClicks(clicks + 1);
  };
  const handleSetBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + neutral + updatedBad);
    setScore(score - 1);
    setClicks(clicks + 1);
  };

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleSetGood} text={"good"} />
        <Button handleClick={handleSetNeutral} text={"neutral"} />
        <Button handleClick={handleSetBad} text={"bad"} />
        <h1>statistics</h1>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          score={score}
          clicks={clicks}
        />
      </div>
    </>
  );
};

export default App;
