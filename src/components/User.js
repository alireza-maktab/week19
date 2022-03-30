import React from "react";
import UserPng from "../assets/user.png";

export default function User({ username }) {
  return (
    <div className="user-avatar">
      <span>{username}</span>
      <img height={40} src={UserPng} alt="avatar" />
    </div>
  );
}
