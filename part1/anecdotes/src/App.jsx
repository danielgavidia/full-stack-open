import { useState } from "react";

const ButtonVote = () => {
  return <button>vote</button>;
};
const ButtonNextAnecdote = (props) => {
  return <button onClick={props.handleClick}>next anecdote</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const anecdoteObject = {};
  anecdotes.forEach((value, index) => {
    anecdoteObject[index] = {
      value: value,
      votes: 0,
    };
  });

  const [anecdoteIndex, setAnecdoteIndex] = useState(0);
  const [anecdoteObj, setAnecdoteObj] = useState(anecdoteObject);
  console.log(anecdoteObj);

  const handleVote = () => {
    console.log();
  };

  const handleNextAnecdote = () => {
    const newAnecdoteIndex = Math.floor(Math.random() * anecdotes.length);
    console.log(newAnecdoteIndex);
    setAnecdoteIndex(newAnecdoteIndex);
  };

  return (
    <div>
      <p>{anecdotes[anecdoteIndex]}</p>
      <ButtonNextAnecdote handleClick={handleNextAnecdote} />
    </div>
  );
};

export default App;
