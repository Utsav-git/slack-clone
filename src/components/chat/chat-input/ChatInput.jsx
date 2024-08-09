import { useState } from "react";
import "./ChatInput.css";
import db from "../../../firebase/Firebase";
import firebase from "firebase/compat/app";
import SendIcon from "@mui/icons-material/Send";
import { ModalComponent } from "../../modals/ModalComponent";

export const ChatInput = (props) => {
  const { roomName, roomID } = props;
  const [inputMessage, setInputMessage] = useState("");

  // Extract user details from redux store
  // const { user } = useSelector((state) => state.authentication);
  const user = JSON.parse(localStorage.getItem("userDetails"));

  const sendMessage = (e) => {
    e.preventDefault();
    if (roomID && inputMessage) {
      db.collection("channels").doc(roomID).collection("messages").add({
        message: inputMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        user: user?.displayName,
        userImage: user?.photoURL,
      });
    }
    setInputMessage("");
  };
  return (
    <div className="chatInput">
      <ModalComponent />;
      <form>
        <input
          autoFocus
          type="text"
          onChange={(e) => {
            setInputMessage(e.target.value);
          }}
          value={inputMessage}
          placeholder={`Message #${roomName?.toLowerCase()}`}
        />
        <button className="submitBtn" type="submit" onClick={sendMessage}>
          {/* <ArrowRight /> */}
          <SendIcon />
        </button>
      </form>
    </div>
  );
};
