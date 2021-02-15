import React from "react";
import "./headerOption.css";
import { Avatar } from "@material-ui/core";

const HeaderOPtion = ({ avatar, Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOPtion__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOPtion;
