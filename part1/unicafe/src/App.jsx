import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statisticline = (props) => {
  return (
    <tr>
      <td>{props.text} </td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.clicks !== 0) {
    return (
      <>
        <table>
          <tbody>
            <Statisticline text={"good"} value={props.good} />
            <Statisticline text={"neutral"} value={props.neutral} />
            <Statisticline text={"bad"} value={props.bad} />
            <Statisticline text={"all"} value={props.total} />
            <Statisticline text={"average"} value={props.score / props.total} />
            <Statisticline
              text={"positive"}
              value={((props.good / props.total) * 100).toString().concat(" %")}
            />
          </tbody>
        </table>
      </>
    );
  }
  return <p>No feedback given</p>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);
  const [clicks, setClicks] = useState(0);

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
