import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import db from "../../firebase/Firebase";
import { Message } from "../message/Message";
const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("channels")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("channels")
      .doc(roomId)
      .collection("messages")
      .orderBy("timeStamp", "asc")
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
        {/* Message Component */}
        {roomMessages.map(
          ({ message, timeStamp, user, userImage }) => (
            <Message
              message={message}
              timeStamp={timeStamp}
              user={user}
              userImage={userImage}
            />
          )
          // console.log(message)
        )}
      </div>
    </div>
  );
};

export default Chat;
