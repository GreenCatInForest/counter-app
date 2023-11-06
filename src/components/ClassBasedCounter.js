import { Component } from "react";

export class ClassBasedCounter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="border border-secondary m-3 p-4 rounded">
        <div className="text-center display-6 mb-4">Counter: 0</div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-success btn-lg display-3 mx-3">
            Increment
          </button>
          <button className="btn btn-secondary btn-lg display-1 mx-3 ">
            Reset
          </button>
          <button className="btn btn-danger btn-lg display-3 mx-3">
            Decrement
          </button>
        </div>
      </div>
    );
  }
}
