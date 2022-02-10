import React from "react";

export default function Card(props) {
  return (
    <div>
      {/* <img src="{props.icon}" className="placeholder"/> */}
      {console.log(props.icon)}
      <img src={props.icon} className="icon" alt="error" />
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}
