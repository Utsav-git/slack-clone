import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import {
  AccountCircleOutlined,
  AccessTime,
  HelpOutline,
  Search,
} from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatar Icon for Logged in user */}
        <AccountCircleOutlined />
        {/* Time Icon */}
        <AccessTime />
      </div>
      <div className="header__search">
        {/* Search Icon */}
        <Search />
        {/* Search Input */}
        <input type="text" placeholder="Search Here" />
      </div>
      <div className="header__right">
        {/* Help Icon */}
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
