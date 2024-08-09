import "./SidebarOption.css";
import { useNavigate } from "react-router-dom";
import db from "../../firebase/Firebase";
import TagIcon from "@mui/icons-material/Tag";
import { ModalComponent } from "../modals/ModalComponent";
import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addChannel = () => {
    // const channelName = prompt(`Please enter channel name`);
    setOpen(true);

    // if (channelName) {
    //   db.collection("channels").add({
    //     name: channelName,
    //   });
    // }
    // <ModalComponent open={true} />;
  };
  const selectChannel = () => {
    id ? navigate(`/room/${id}`) : navigate(title);
  };
  return (
    <div>
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
            <TagIcon className="sidebarOption__icon" />
            <h3>{title}</h3>
          </>
        )}
      </div>
      {open && (
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "400px",
              backgroundColor: "#fff",
              boxShadow: 24,
              padding: "20px",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default SidebarOption;
