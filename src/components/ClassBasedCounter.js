import { Component } from "react";

export class ClassBasedCounter extends Component {
  constructor(props) {
    super(props);
  }

  handleIncrement = () => {
    console.log("handleIncrement");
  };
  handleReset = () => {};
  handleDecrement = () => {};

  render() {
    return (
      <div className="border border-secondary m-3 p-4 rounded">
        <div className="text-center display-6 mb-4">Counter: 0</div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-success btn-lg"
            onClick={this.handleIncrement}
          >
            Increment
          </button>
          <button
            className="btn btn-secondary btn-lg"
            onClick={this.handleReset}
          >
            Reset
          </button>
          <button
            className="btn btn-danger btn-lg"
            onClick={this.handleDecrement}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}
