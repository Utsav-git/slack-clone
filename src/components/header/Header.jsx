import React from "react";
import "./Header.css";
import {
  AccountCircleOutlined,
  AccessTime,
  HelpOutline,
  Search,
  ExitToApp,
} from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatar Icon for Logged in user */}
        <AccountCircleOutlined
          titleAccess="Profile"
          onClick={() => {
            console.log("Profile");
          }}
        />
        {/* Time Icon */}
        <AccessTime
          titleAccess="Recents"
          onClick={() => {
            console.log("Recents");
          }}
        />
      </div>
      <div className="header__search">
        {/* Search Icon */}
        <Search />
        {/* Search Input */}
        <input type="text" placeholder="Search Here" />
      </div>
      <div className="header__right">
        {/* Help Icon */}
        <HelpOutline
          titleAccess="Help"
          onClick={() => {
            console.log("Help");
          }}
        />
        <ExitToApp
          titleAccess="Logout"
          onClick={() => {
            console.log("Logout");
          }}
        />
      </div>
    </div>
  );
};

export default Header;
