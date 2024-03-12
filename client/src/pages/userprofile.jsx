import React from "react";
import { Link } from "react-router-dom";
import Avatar5 from "../images/Avatar5.jpg";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

function Userprofile() {
  const [avatar, setAvatar] = useState("");
  return (
    <div>
      <section className="profile">
        <div className="container profile_container">
          <Link to={"/myposts/sdfsdf"} className="btn">
            My posts
          </Link>
          <div className="profile_details">
            <div className="avatar_wrapper">
              <div className="profile_avatar">
                <img src={Avatar5} alt="" />
                <form className="avatar_form">
                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    accept="png, jpg, jpeg"
                  />
                  <label htmlFor="avatar">
                    <FaEdit />
                  </label>
                </form>
                <button className="profile_avatar-btn">
                  <FaCheck />
                </button>
              </div>
            </div>
            <h1>Varun</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Userprofile;
