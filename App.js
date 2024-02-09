import React from "react";
import "./App.css";
import Nav from "./components/nav";
import ChatBody from "./components/chatbody";

function App() {
  return (
    <div className="__main">
      <Nav />
      <ChatBody />
    </div>
  );
}

export default App;