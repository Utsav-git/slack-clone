import "./SidebarOption.css";
import { useNavigate } from "react-router-dom";
import db from "../../firebase/Firebase";
import TagIcon from "@mui/icons-material/Tag";
import { ModalComponent } from "../modals/ModalComponent";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { Close } from "@mui/icons-material";

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [channelName, setChannelName] = useState("");
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addChannel = (e) => {
    e.preventDefault();
    // const channelName = prompt(`Please enter channel name`);
    // setOpen(true);
    if (channelName) {
      db.collection("channels").add({
        name: channelName,
      });
    }
    setChannelName("");
    setOpen(false);
  };
  const selectChannel = () => {
    id ? navigate(`/room/${id}`) : navigate(title);
  };
  return (
    <div>
      <div
        className="sidebarOption"
        onClick={() => {
          addChannelOption ? setOpen(true) : selectChannel();
        }}
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
              width: "500px",
              backgroundColor: "#fff",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #f1f1f1",
                p: "3px 5px",
              }}
            >
              <Typography>Create a new channel</Typography>
              <span>
                <IconButton onClick={handleClose}>
                  <Close />
                </IconButton>
              </span>
            </Box>
            <Box
              sx={{
                p: "10px 5px",
                input: {
                  mt: "5px",
                  p: "5px 8px",
                  height: "30px",
                  border: "none",
                  width: "95%",
                  backgroundColor: "#f1f1f1",
                  "::placeholder": {
                    fontStyle: "italic",
                  },
                },
              }}
            >
              <form>
                <Typography sx={{ fontSize: "14px" }}>Name</Typography>
                <input
                  type="text"
                  onChange={(e) => {
                    setChannelName(e.target.value);
                  }}
                  value={channelName}
                  placeholder={`Enter channel name`}
                />
                <Typography sx={{ fontSize: "12px", fontStyle: "italic" }}>
                  Tagline
                </Typography>
                <Box
                  sx={{
                    mt: "5px",
                    pt: "10px",
                    borderTop: "1px solid #f1f1f1",
                    display: "flex",
                    justifyContent: "end",
                    button: {
                      border: "none",
                      p: "10px",
                      cursor: "pointer",
                      mx: "5px",
                      borderRadius: "4px",
                      ":hover": {
                        bgcolor: "#421f45",
                        color: "#f1f1f1",
                        transition: "ease-in",
                      },
                    },
                  }}
                >
                  <button
                    className="createChannelBtn"
                    type="submit"
                    onClick={addChannel}
                  >
                    {/* <ArrowRight /> */}
                    Create
                  </button>
                  <button className="cancelChannelBtn" onClick={handleClose}>
                    Cancel
                  </button>
                </Box>
              </form>
            </Box>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default SidebarOption;
