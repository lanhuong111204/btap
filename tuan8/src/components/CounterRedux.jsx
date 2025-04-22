import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

export default function CounterRedux() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="space-x-2">
      <p>Redux count: {count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
