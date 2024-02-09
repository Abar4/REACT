import React, { Component } from "react";
import "./chatbody.css";
import ChatContent from "./chatcontent";
import UserProfile from "./userprofile";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">

        <ChatContent />
        <UserProfile />
      </div>
    );
  }
}