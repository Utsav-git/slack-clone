import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import {
  Add,
  Apps,
  Bookmark,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import db from "../../firebase/Firebase";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
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
          <h2>Slack Clone</h2>
          <h3>
            <FiberManualRecord />
            Utsav
          </h3>
        </div>
        <Create />
      </div>
      <SidebarOption Icon={InsertComment} title="Unread" />
      <SidebarOption Icon={Inbox} title="Mentions & Reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={Bookmark} title="Channel Browser" />
      <SidebarOption Icon={PeopleAlt} title="People & Groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} title="Add Channel" />
      {/* Connect to DB and list all the channels from DB */}
      {channels.map((channel) => {
        /* <SidebarOption .../> */
        return <SidebarOption key={channel.id} title={channel.name} />;
      })}
    </div>
  );
};

export default Sidebar;
