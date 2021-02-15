import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  const recentItem = (topic) => {
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>;
  };

  return (
    <div className="sidebar">
      <div className="sidebar__Top">
        <img
          src="https://images.unsplash.com/photo-1542261777448-23d2a287091c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          alt="profilepic"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Syed Gufran</h2>
        <h4>syedgufran1997@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">2,443</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Reactjs")}
        {recentItem("Programming")}
        {recentItem("Softwareengineering")}
        {recentItem("design")}
        {recentItem("development")}
      </div>
    </div>
  );
};

export default Sidebar;
