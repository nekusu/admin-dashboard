import Button from './Button';
import { RiSearchLine } from 'react-icons/ri';

function SearchBar() {
  return (
    <form className="SearchBar">
      <input type="text" placeholder="Search..." />
      <Button
        icon={<RiSearchLine />}
        type="submit"
        title="Search"
      />
    </form>
  );
}

export default SearchBar;
