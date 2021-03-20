import React from "react";

class App extends React.Component {
  state = {
    counter: 0,
    map : { a: 1, b: 2, c: 3 }
  };

  increaseCounter = () => {
    if (this.state.counter == 999) {
      this.state.counter = 0;
      this.setState({ counter: 0 });
    } else this.setState({ counter: this.state.counter + 1 });
  };

  decreaseCounter = () => {
    if (this.state.counter <=0) {
      this.state.counter = 0;
      this.setState({ counter: 0 });
    } else this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.decreaseCounter}>-</button>
        <button onClick={this.increaseCounter}>+</button>
        <div>
          { Object.values(this.state.map)}
        </div>
      </div>
    );
  }
}
export default App;