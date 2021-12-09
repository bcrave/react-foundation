import { useState, useEffect, useRef } from "react";
import "../styles/DropdownMenu.scss";
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { CSSTransition } from "react-transition-group";

import DropdownItem from "./DropdownItem";

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const calculateHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calculateHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<SettingsIcon />}
            rightIcon={<ChevronRightIcon />}
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calculateHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<ChevronLeftIcon />}
            goToMenu="main"
            setActiveMenu={setActiveMenu}
          />
          <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
