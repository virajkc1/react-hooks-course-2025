import { useEffect, useState } from "react";

export const EffectExample = () => {
  const [data, setData] = useState([]); //initial value is an empty list
  const [showPedro, setShowPedro] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  //you can make the useEffect run after every render or you can control it  based on a STATE VALUE

  useEffect(() => {
    console.log("Pedro");
  }, [showPedro]);

  return (
    <div>
      <button onClick={() => setShowPedro((prev) => !prev)}> Toggle </button>
      <h1> Posts</h1>
      <ul>
        {data.map((item, index) => (
          <li>
            {item.title} {index}
          </li>
        ))}
      </ul>
    </div>
  );
};

/*
useEffect hook - one of the most powerful hooks in react

Its used for fetching data from an API immediately when the page renders
allows you to access systems outside of react environment

Lets you run code after component renders

If you wanted to run a function every time someone renders a page for the first time

For fetching data - you can use a react query








*/
