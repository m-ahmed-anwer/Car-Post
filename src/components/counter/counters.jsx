import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  change = (cc) => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(cc);
    counter[index] = { ...cc };
    counter[index].value++;
    this.setState({ counter });
  };

  reset = () => {
    const counters = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  delete = (cId) => {
    const counter = this.state.counter.filter((c) => c.id !== cId);
    this.setState({ counter });
  };

  render() {
    return (
      <div>
        <h3>
          Total Product : {this.state.counter.filter((c) => c.value > 0).length}
        </h3>
        {this.state.counter.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.delete}
            onChange={this.change}
            onReset={this.reset}
          ></Counter>
        ))}
        <button onClick={this.reset} className="btn btn-info btn-sm m-2">
          Reset
        </button>
      </div>
    );
  }
}
