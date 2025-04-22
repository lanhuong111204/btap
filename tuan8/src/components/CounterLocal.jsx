import { useCounter } from '../context/CounterContext';

export default function CounterLocal() {
  const { state, dispatch } = useCounter();

  return (
    <div className="space-x-2">
      <p>useReducer count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}
