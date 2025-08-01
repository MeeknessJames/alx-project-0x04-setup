import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';
import type { RootState, AppDispatch } from '../store/store';
import Header from '@/components/layouts/Header';

const CounterApp = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <Header />
      <main>
        <p>Current Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </main>
    </div>
  );
};

export default CounterApp;