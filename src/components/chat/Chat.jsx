import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import db from "../../firebase/Firebase";
import { Message } from "../message/Message";
import { ChatInput } from "./chat-input/ChatInput";
import { Info, StarOutline } from "@mui/icons-material";
const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  let scrollTop = document.querySelector(".chat__messages")?.scrollTop;
  let clientHeight = document.querySelector(".chat__messages")?.clientHeight;
  let scrollHeight = document.querySelector(".chat__messages")?.scrollHeight;
  let shouldScroll = null;
  const scrollToBottom = () => {
    scrollTop = scrollHeight;
  };
  useEffect(() => {
    if (roomId) {
      db.collection("channels")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("channels")
      .doc(roomId)
      .collection("messages")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  if (roomMessages) {
    shouldScroll = scrollTop + clientHeight === scrollHeight;
  }
  if (!shouldScroll) {
    scrollToBottom();
  }
  console.log("Should Scroll:", shouldScroll);

  return (
    <div className="chat">
      {/* <h2>You're in {roomId} room</h2> */}
      <div className="chat__header">
        {/* Room details in header */}
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            {/* Fetch the channel name from DB */}
            <strong>#{roomDetails?.name}</strong>
            <StarOutline />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <Info />
            Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.length === 0 && <div className="chat__empty">Start a Conversation 👋</div>}
        {/* Message Component */}
        {roomMessages.map(
          ({ message, createdAt, user, userImage }) => (
            <Message
              message={message}
              createdAt={createdAt}
              user={user}
              userImage={userImage}
            />
          )
          // console.log(message)
        )}
      </div>
      <ChatInput roomName={roomDetails?.name} roomID={roomId} />
    </div>
  );
};

export default Chat;
