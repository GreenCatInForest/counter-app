import { Component } from "react";

export class ClassBasedCounter extends Component {
  constructor(props) {
    super(props);

    // declare state in a class based component, set it to 0
    this.state = { count: 0 };
  }

  // buttons pointed to methods over here
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });

    // check the function
    // console.log("handleIncrement")
  };

  handleReset = () => {};

  handleDecrement = () => {};

  render() {
    return (
      <div className="border border-secondary m-3 p-4 rounded">
        <div className="text-center display-6 mb-4">
          {/* access the value from JavaScript set in this.state.count */}
          Counter: {this.state.count}
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-success btn-lg"
            // point buttons to methods
            onClick={this.handleIncrement}
          >
            Increment
          </button>
          <button
            className="btn btn-secondary btn-lg"
            // point buttons to methods
            onClick={this.handleReset}
          >
            Reset
          </button>
          <button
            className="btn btn-danger btn-lg"
            // point buttons to methods
            onClick={this.handleDecrement}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}
