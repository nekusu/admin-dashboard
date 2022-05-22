import { useState } from 'react';
import NavButton from './NavButton';
import {
  RiHomeLine,
  RiUserLine,
  RiMessage3Line,
  RiHistoryLine,
  RiTodoLine,
  RiGroupLine,
  RiSettingsLine,
} from 'react-icons/ri';

function Sidebar({ defaultButton = 'Home' }) {
  const buttons = [
    { icon: <RiHomeLine />, title: 'Home' },
    { icon: <RiUserLine />, title: 'Profile' },
    { icon: <RiMessage3Line />, title: 'Messages' },
    { icon: <RiHistoryLine />, title: 'History' },
    { icon: <RiTodoLine />, title: 'Tasks' },
    { icon: <RiGroupLine />, title: 'Communities' },
    { icon: <RiSettingsLine />, title: 'Settings' },
  ];
  const [selected, setSelected] = useState(defaultButton);

  return (
    <div className="Sidebar">
      <menu>
        {buttons.map(({ icon, title }, index) => (
          <NavButton
            key={index}
            icon={icon}
            title={title}
            selected={selected === title}
            handleClick={setSelected} />
        ))}
      </menu>
    </div>
  );
}

export default Sidebar;
