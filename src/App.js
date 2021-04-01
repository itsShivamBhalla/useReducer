import React, { useReducer } from 'react'
import './App.css';

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "Increment") {
    return state + 1;
  }
  else if (action.type === "Decrement") {
    return state - 1;
  }
}
function App() {
const [state, dispatch] = useReducer(reducer, initialState);
return (
    <div className="app">
      <div className="app__main">
        <p>
          {state}
        </p>
        <div className="app__btn">
          <button onClick={() => {
            dispatch({ type: "Increment" })
          }}>
            Inc
        </button>
          <button onClick={() => {
            dispatch({ type: "Decrement" })
          }}>
            Dec
        </button>
        </div>
      </div>
    </div>
  )
}
export default App
