import React, { useEffect, useState } from "react";
import "./Menu.css";

const Menu = ({ showNav, setShowNav }) => {
  let menu = document.querySelector(".menu");
  let middleLine = document.querySelector(".middle");
  useEffect(() => {
    menu = document.querySelector(".menu");
    middleLine = document.querySelector(".middle");
    // To change the upper and bottom line to X
  }, []);

  // To change the upper and bottom line to X
  const changeMenu = () => {
    menu?.firstElementChild.classList.toggle("rotate45Degree");
    menu?.lastElementChild.classList.toggle("rotateMinus45Degree");
    middleLine?.classList.toggle("hide");
    //show or hid navigation bar
    setShowNav(!showNav);
  };

  return(
    <div className="menu" onClick={changeMenu}>
      <span className="line upper"></span>
      <span className="line middle"></span>
      <span className="line bottom"></span>
    </div>
  ) 
};

export default Menu;
