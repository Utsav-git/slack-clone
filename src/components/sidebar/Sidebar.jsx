import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SidebarOption from "./SidebarOption";
import db from "../../firebase/Firebase";
import { useSelector } from "react-redux";

const Sidebar = () => {
  // const { user } = useSelector((state) => state.authentication);
  const user = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails") || "")
    : {};

  const [channels, setChannels] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Socio Vert</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>

        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Unread" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & Groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File Browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      {/* <SidebarOption Icon={ExpandMore} title="Channels" /> */}
      <div
        className="sidebarOption"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? (
          <ExpandMoreIcon className="sidebarOption__icon" />
        ) : (
          <ChevronRightIcon className="sidebarOption__icon" />
        )}

        <h3>Channels</h3>
      </div>
      {/* <hr /> */}

      {/* Connect to DB and list all the channels from DB */}
      {isExpanded &&
        channels.map((channel) => {
          /* <SidebarOption .../> */
          return (
            <SidebarOption
              key={channel.id}
              title={channel.name}
              id={channel.id}
            />
          );
        })}
      {isExpanded && (
        <SidebarOption
          Icon={AddBoxIcon}
          title="Add Channel"
          addChannelOption={true}
        />
      )}
    </div>
  );
};

export default Sidebar;
