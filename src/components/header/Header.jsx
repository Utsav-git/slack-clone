import React, { useEffect, useState } from "react";
import "./Header.css";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import AccessTime from "@material-ui/icons/AccessTime";
import HelpOutline from "@material-ui/icons/HelpOutline";
import Search from "@material-ui/icons/Search";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@material-ui/core";

const Header = () => {
  // Extract user details from redux store
  // const { user } = useSelector((state) => state.authentication);
  const user = JSON.parse(localStorage.getItem("userDetails"));

  // const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.clear();
    setTimeout(() => {
      console.log("Signing out...");
      dispatch(logout());
      window.location.replace("/");
    }, 100);
  };
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatar Icon for Logged in user */}
        <Avatar
          style={{
            cursor: "pointer",
            marginRight: "5px",
          }}
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={() => {
            console.log("Profile");
          }}
          titleaccess="Profile"
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
