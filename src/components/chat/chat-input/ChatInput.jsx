import { useState } from "react";
import "./ChatInput.css";
import ArrowRight from "@material-ui/icons/ArrowRight";
import db from "../../../firebase/Firebase";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import { Input } from "@material-ui/core";

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
          <ArrowRight />
        </button>
      </form>
    </div>
  );
};
