import React from "react";
import "./Header.css";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import AccessTime from "@material-ui/icons/AccessTime";
import HelpOutline from "@material-ui/icons/HelpOutline";
import Search from "@material-ui/icons/Search";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import { logout } from "../../auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    console.log("Signing out...");
    dispatch(logout());
    localStorage.setItem("isAuthenticated", false);
  };
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
        <ExitToApp titleAccess="Logout" onClick={signOut} />
      </div>
    </div>
  );
};

export default Header;
