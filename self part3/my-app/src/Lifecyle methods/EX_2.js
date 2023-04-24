import React from "react";

class EX_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.data + 10,
      product: "Dummy",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("get derived");
    return { ...state, count: 10 + props.data };
  }

  shouldComponentUpdate() {
    console.log("should component update");
    return true;
  }
  componentDidMount() {
    console.log("component didmount");
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ ...this.State, product: json.title });
      });
  }
  getSnapshotBeforeUpdate(prevprops, prevstate) {
    console.log("getsnapbeforeupdate" + prevstate+prevprops);
    return null;
  }
  componentDidUpdate() {
    console.log("didupdate");
  }
  componentWillUnmount() {
    console.log("its will be hide");
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>hi iam child Component</h1>
        <h1>props:{this.state.count}</h1>
        <h1>{this.state.product}</h1>
      </>
    );
  }
}

export default EX_2;
