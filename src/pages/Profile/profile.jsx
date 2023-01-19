import React from "react";
import "./profile.css";
import { AiFillCamera } from "react-icons/ai";
import { updateFields } from "../../Redux/user";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const document = useSelector((state) => state.user.document);

  const dispatch = useDispatch();
  function handleProfileImage(e) {
    let form = new FormData();
    form.append("profile", e.target.files[0]);
    dispatch(updateFields(form));
  }
  return (
    <section className="profile">
      <div className="container">
        <div className="cover">
          <div className="profileImage">
            <img src={document.profileImage} alt="" />
            <div className="upload">
              <input type="file" onChange={handleProfileImage} />
              <AiFillCamera className="camera" />
            </div>
          </div>
        </div>

        <div className="profile_info">
          <h3 className="profileName">Rohan Tiwari</h3>
          <div className="following-followers">
            <span className="following">
              {document.following.length ? document.following.length : "No"}{" "}
              Following
            </span>
            <span className="followers">
              {document.followers.length ? document.followers.length : "No"}{" "}
              Followers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
