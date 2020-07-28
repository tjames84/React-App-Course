
// babel src/playground/counter-examples.js -o public/scripts/app.js --presets env,react --watch

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handelAddOne = this.handelAddOne.bind(this);
    this.handelMinusOne = this.handelMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: props.counter
    };
  }

  handelAddOne () {
    console.log('handelAddOne');

    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handelMinusOne () {
    console.log('handelMinusOne');

    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset () {
    console.log('handleReset');

    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handelAddOne}>+1</button>
        <button onClick={this.handelMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count : {count}</h1>

//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// // initialize
// renderCounterApp();
