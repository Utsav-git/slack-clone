import React from "react";
import "./Message.css";

export const Message = ({ message, timeStamp, user, userImage }) => {
  return (
    <div className="message">
      <img src={userImage} alt="User Img" />
      <div className="message__info">
        <h4>
          {user}
          <span className="message__timestamp">
            {new Date(timeStamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};
