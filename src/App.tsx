import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/2048px-SVG_Logo.svg.png"
          alt=""
        />
      </header>
      <nav className="nav">
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
      </nav>
      <div className="content">
        <div>
          {" "}
          <img src="https://www.imgcorporations.com/images/bg-img.jpg" alt="" />
        </div>
        <div>ava + description</div>
        <div>
          My posts
          <div>New posts</div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
