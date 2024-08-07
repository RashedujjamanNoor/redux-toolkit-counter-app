import { useDispatch, useSelector } from "react-redux";
import { decrement, reset, increment } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter App Using Redux-Toolkit</h1>
      <h1>COUNT : {count}</h1>
      <button
        onClick={() => {
          if (count > 0) {
            dispatch(decrement());
          }
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default CounterView;
