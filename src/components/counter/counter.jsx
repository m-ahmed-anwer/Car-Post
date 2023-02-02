import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClass()}> {this.formatCuont()} </span>
        <button
          onClick={() => this.props.onChange(this.props.counter)}
          className="btn btn-dark"
        >
          Incremet
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>  
        <br />
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let classess = "m-2 text-";
    classess += this.props.counter.value === 0 ? "danger" : "info";
    return classess;
  }
  formatCuont() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
