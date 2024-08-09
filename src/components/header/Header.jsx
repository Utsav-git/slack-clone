import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../auth/authSlice";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

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
            navigate("/profile");
            console.log("Profile");
          }}
          titleaccess="Profile"
        />

        {/* Time Icon */}
        <AccessTimeIcon
          titleAccess="Recents"
          onClick={() => {
            console.log("Recents");
          }}
        />
      </div>
      <div className="header__search">
        {/* Search Icon */}
        <SearchIcon />
        {/* Search Input */}
        <input type="text" placeholder="Search Here" />
      </div>
      <div className="header__right">
        {/* Help Icon */}
        <HelpIcon
          titleAccess="Help"
          onClick={() => {
            console.log("Help");
          }}
        />
        <ExitToAppIcon titleAccess="Logout" onClick={signOut} />
      </div>
    </div>
  );
};

export default Header;
