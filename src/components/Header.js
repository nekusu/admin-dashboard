import { useMediaQuery } from 'react-responsive';
import SearchBar from "./SearchBar";
import Button from "./Button";
import RandomAvatar from "./RandomAvatar";
import {
  RiMenu2Fill,
  RiNotificationLine,
  RiAddLine,
  RiUploadLine,
  RiShareCircleLine,
} from 'react-icons/ri';
import '../styles/Header.css';

function Header({ toggleSidebar }) {
  return (
    <header className="Header">
      <div>
        {useMediaQuery({ maxWidth: 910 }) && (
          <Button
            icon={<RiMenu2Fill />}
            title="Menu"
            handleClick={() => toggleSidebar(true)}
            alt
          />
        )}
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
