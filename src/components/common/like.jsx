import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  let suka = { cursor: "pointer", color: "red" };
  if (!props.liked) suka.color = "black";
  return (
    <i
      onClick={props.onClick}
      style={suka}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
