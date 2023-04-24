import React from "react";
import EX_2 from "./EX_2";
class EX_1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      x: 10,
      n: true,
    };
  }

  render() {
    return (
      <>
        <h1>iam parent Component</h1>
        {this.state.n && <EX_2 data={this.state.x} />}
        <h1>main:{this.state.x}</h1>

        <button
          onClick={() => this.setState({ ...this.state, n: !this.state.n })}
        >
          {this.state.n ? "show" : "edit"}
        </button>

        <button onClick={() => this.setState({ x: this.state.x + 10 })}>
          click
        </button>
      </>
    );
  }
}

export default EX_1;
