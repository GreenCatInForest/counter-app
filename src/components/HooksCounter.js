export const HooksCounter = () => {
  return (
    <div className="border border-secondary m-3 p-4 rounded">
      <div className="text-center display-6 mb-4">Functional Based Counter</div>
      <div className="text-center display-6 mb-4">Counter: 0</div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-success btn-lg">Increment</button>
        <button className="btn btn-secondary btn-lg">Reset</button>
        <button className="btn btn-danger btn-lg">Decrement</button>
      </div>
    </div>
  );
};
