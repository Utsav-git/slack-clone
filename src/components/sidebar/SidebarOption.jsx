import "./SidebarOption.css";
import { useNavigate } from "react-router-dom";
import db from "../../firebase/Firebase";
import { ChevronRight } from "@material-ui/icons";

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const navigate = useNavigate();
  const addChannel = () => {
    const channelName = prompt(`Please enter channel name`);
    if (channelName) {
      db.collection("channels").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    id ? navigate(`/room/${id}`) : navigate(title);
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {/* {Icon && <Icon className="sidebarOption__icon" />} */}
      {Icon ? (
        <>
          <Icon className="sidebarOption__icon" />
          <h3>{title}</h3>
        </>
      ) : (
        <>
          {/* <span className="sidebarOption__icon">#</span> */}
          <ChevronRight className="sidebarOption__icon" />
          <h3>
            {/* <span className="sidebarOption__hash"></span> */}
            {title}
          </h3>
        </>
      )}
    </div>
  );
};

export default SidebarOption;
