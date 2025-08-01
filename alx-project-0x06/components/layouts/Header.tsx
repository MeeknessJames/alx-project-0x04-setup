import { useSelector } from 'react-redux'; // Import useSelector
import type { RootState } from '../../redux/store';

const Header = () => {
  const count = useSelector((state: RootState) => state.counter.value); // Use useSelector to get the count

  return (
    <header>
      <h1>Counter: {count}</h1>
    </header>
  );
};

export default Header;