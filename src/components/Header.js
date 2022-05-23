import SearchBar from "./SearchBar";
import Button from "./Button";
import RandomAvatar from "./RandomAvatar";
import {
  RiNotificationLine,
  RiAddLine,
  RiUploadLine,
  RiShareCircleLine,
} from 'react-icons/ri';
import '../styles/Header.css';

function Header() {
  return (
    <header className="Header">
      <div>
        <SearchBar />
        <Button
          icon={<RiNotificationLine />}
          title="Notifications"
          alt
        />
        <RandomAvatar />
      </div>
      <div>
        <div className="HeaderButtons">
          <Button icon={<RiAddLine />} label="Add" />
          <Button icon={<RiUploadLine />} label="Upload" />
          <Button icon={<RiShareCircleLine />} label="Share" />
        </div>
        <div className="Greetings">
          <p>Hi there,</p>
          <p>Morgan Oakley (@morgan)</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
