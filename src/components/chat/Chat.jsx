import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import db from "../../firebase/Firebase";
import { Message } from "../message/Message";
import { ChatInput } from "./chat-input/ChatInput";
const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  const scrollTop = document.querySelector(".chat__messages").scrollTop;
  const clientHeight = document.querySelector(".chat__messages").clientHeight;
  const scrollHeight = document.querySelector(".chat__messages").scrollHeight;
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
  // console.log("Messages:", roomMessages);

  return (
    <div className="chat">
      {/* <h2>You're in {roomId} room</h2> */}
      <div className="chat__header">
        {/* Room details in header */}
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            {/* Fetch the channel name from DB */}
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined />
            Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.length === 0 && <div>Start Messaging and Connect</div>}
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
