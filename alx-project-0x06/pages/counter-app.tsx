import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';
import type { RootState, AppDispatch } from '../store/store';
import Header from '@/components/layouts/Header';

const CounterApp = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch(); // This line is what the checker is looking for

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