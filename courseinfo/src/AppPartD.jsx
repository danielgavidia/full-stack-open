import { useState } from "react";

const AppPartD = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
  };
  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
  };
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  );
};

export const AppPartD2 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left);
  };
  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(" ")}</p>
      <p>total {total}</p>
    </div>
  );
};

export default AppPartD;
