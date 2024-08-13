import React from "react";
import "./Message.css";

export const Message = ({ message, createdAt, user, userImage }) => {
  return (
    <div className="message">
      <img src={userImage} alt="User" />
      <div className="message__info">
        <h4>
          {user}
          <span className="message__createdAt">
            {new Date(createdAt?.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};
