import CounterRedux from './components/CounterRedux';
import CounterLocal from './components/CounterLocal';
import { CounterProvider } from './context/CounterContext';

export default function App() {
  return (
    <div className="p-8 space-y-6 text-center">
      <h1>Counter App (Redux + useReducer)</h1>
      <CounterProvider>
        <CounterLocal />
      </CounterProvider>
      <CounterRedux />
    </div>
  );
}


