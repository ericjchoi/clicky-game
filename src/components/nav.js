import React from "react";
import "./nav.css";

function Nav(props) {
  return (
    <nav className="navClass fixed-top">
      <a href="/">Clicky Game</a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="navMessage">{props.navMessage}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="score">Score: {props.score}</span>
      <span> | </span>
      <span id="topScore">Top Score: {props.topScore}</span>
    </nav>
  );
}

export default Nav;