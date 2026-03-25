import { useState } from "react";
export const StateExample = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((prev) => prev + 1);
    console.log(count);
  };
  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={increaseCount}> Increase Counter</button>
    </div>
  );
};
/* 
We need state for re rendering our UI for value that is changed

state setter functions let you have a callback function, it allows you to have access to a previous value of a state and mutating it

Using values of state causes re renders

The console.log runs before the page decides to re render 
React only re renders after the increaseCount function is run

*/
