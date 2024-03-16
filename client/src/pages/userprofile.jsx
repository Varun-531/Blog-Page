import React from "react";
import { Link } from "react-router-dom";
import Avatar5 from "../images/Avatar5.jpg";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

function Userprofile() {
  const [avatar, setAvatar] = useState(Avatar5);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

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
                <img src={avatar} alt="" />
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
            <form className="form profile_form" id="form_error-message">
              <p>This is an error message</p>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <button type="submit" className="btn primary">
                Update details
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Userprofile;
