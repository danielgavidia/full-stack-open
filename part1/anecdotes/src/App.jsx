import { useState } from "react";

const ButtonVote = (props) => {
  return <button onClick={props.handleClick}>vote</button>;
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
    const updatedAnecdoteObj = { ...anecdoteObj };
    const updatedVotes = updatedAnecdoteObj[anecdoteIndex]["votes"] + 1;
    updatedAnecdoteObj[anecdoteIndex]["votes"] = updatedVotes;
    setAnecdoteObj(updatedAnecdoteObj);
  };

  const handleNextAnecdote = () => {
    const updatedAnecdoteIndex = Math.floor(Math.random() * anecdotes.length);
    console.log(updatedAnecdoteIndex);
    setAnecdoteIndex(updatedAnecdoteIndex);
  };

  const getAnecdoteMostVotes = (object) => {
    let maxKey = null;
    let maxVotes = -Infinity;

    for (const [key, obj] of Object.entries(object)) {
      if (obj.votes > maxVotes) {
        maxVotes = obj.votes;
        maxKey = key;
      }
    }
    console.log(maxKey);
    return maxKey;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdoteObj[anecdoteIndex]["value"]}</p>
      <p>has {anecdoteObj[anecdoteIndex]["votes"]} votes</p>
      <ButtonVote handleClick={handleVote} />
      <ButtonNextAnecdote handleClick={handleNextAnecdote} />
      <h1>Anecdote with most votes</h1>
      <p>{anecdoteObj[getAnecdoteMostVotes(anecdoteObj)]["value"]}</p>
    </div>
  );
};

export default App;
