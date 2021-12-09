import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Styles */
import "./App.css";
import JSON_DATA from "./MOCK_DATA.json";
/* Icons */
import AddIcon from "@material-ui/icons/Add";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
/* Components */
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/DropdownMenu";
import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/SidebarItem";
import Contacts from "./pages/contacts";
import Home from "./pages/home";
import WindowSize from "./pages/windowSize";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const isDesktop = viewportWidth > 1050;

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  return (
    <Router>
      <div className="app">
        <Navbar data={JSON_DATA} setSearchTerm={setSearchTerm}>
          {isDesktop ? (
            <>
              <NavItem icon={<AddIcon fontSize="medium" />} />
              <NavItem icon={<NotificationsIcon fontSize="medium" />} />
              <NavItem icon={<ChatIcon fontSize="medium" />} />

              <NavItem icon={<ArrowDropDownIcon fontSize="medium" />}>
                <DropdownMenu />
              </NavItem>
            </>
          ) : (
            <Sidebar>
              <SidebarItem>Add Friends</SidebarItem>
              <SidebarItem>Notifications</SidebarItem>
              <SidebarItem>Messages</SidebarItem>
              <SidebarItem leftIcon={<ArrowBackIosIcon fontSize="small" />}>
                More
              </SidebarItem>
            </Sidebar>
          )}
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contacts">
            <Contacts data={JSON_DATA} searchTerm={searchTerm} />
          </Route>
          <Route path="/useWindowResize">
            <WindowSize />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
