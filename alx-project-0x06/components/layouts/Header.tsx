import { useSelector } from 'react-redux'; 
import type { RootState } from '../../store/store';

const Header = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <header>
      <h1>Counter: {count}</h1>
    </header>
  );
};

export default Header;