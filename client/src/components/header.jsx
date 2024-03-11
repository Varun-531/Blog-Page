import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/icon.png";
// import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function header() {
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="nav_logo">
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className="nav_menu">
          <li>
            <Link to="/profile">Varun</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/Logout">logout</Link>
          </li>
        </ul>
        <button className="nav_toggle-btn">
        <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
}

export default header;
