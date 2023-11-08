import { useState } from "react";

export const AsyncCounter = () => {
  const [count, setCount] = useState(0);

  let handleIncrementAlways1 = () => {
    setCount(count + 1);
    console.log(count);
    setCount(count + 1);
    console.log(count);
    setCount(count + 1);
    console.log(count);
  };

  let handleIncrementAlways3 = () => {
    setCount((count) => count + 1);
    console.log(count);
    setCount((count) => count + 1);
    console.log(count);
    setCount((count) => count + 1);
    console.log(count);
  };

  let handleReset = () => {
    setCount(0);
  };

  return (
    <div className="border border-secondary m-3 p-4 rounded">
      <div className="text-center display-6 mb-4">
        Asyncronous Counter: {count}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-success btn-lg"
          onClick={handleIncrementAlways1}
        >
          Counter Always + 1
        </button>
        <button className="btn btn-secondary btn-lg" onClick={handleReset}>
          Reset
        </button>
        <button
          className="btn btn-success btn-lg"
          onClick={handleIncrementAlways3}
        >
          Counter Always + 3
        </button>
      </div>
    </div>
  );
};
