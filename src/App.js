import { useReducer } from "react";
import { sampleReducer } from "./reducer/reducer";
import "./App.css";

function App() {
  // usually obj / arr (more complicated), string... => useState
  // declare what function / state to develop, like +,-,*...

  // { count: 0 } => initial state, another: (sampleReducer, null, <function>)
  const [state, dispatch] = useReducer(sampleReducer, { count: 0, test: 1 });
  const { count } = state;
  const { test } = state;

  console.log(state);
  console.log(test);

  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };
  // dispatch = action

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>

        <div>{count}</div>
      </header>
    </div>
  );
}

export default App;
