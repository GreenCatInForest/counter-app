import { useState } from "react";

export const HooksCounter = () => {
  // declare useState

  const [count, setCount] = useState(0);

  // buttons pointed to functions over here
  const handleIncrement = () => {
    // test the button connected to method
    // console.log("handleIncrement");

    // set the value of count to the value of count+1
    setCount(count + 1);
  };

  const handleReset = () => {
    // set the value of count to the current value of 0
    setCount(0);
  };

  const handleDecrement = () => {
    // set the value of count to the value of count-1
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div className="border border-secondary m-3 p-4 rounded">
      <div className="text-center display-6 mb-4">
        Functional Based Counter: {count}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-success btn-lg" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn btn-secondary btn-lg" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-danger btn-lg" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};
