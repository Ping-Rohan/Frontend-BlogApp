import React from "react";
import "./Header.css";
import { BiSearch } from "react-icons/bi";
import { CiDark } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function Header() {
  const profileImage = useSelector((state) => state.user.document.profileImage);
  console.log(profileImage);
  return (
    <header>
      <div className="container">
        <div className="header_left">
          <div className="header_logo">
            <img
              src="https://img.freepik.com/free-vector/spa-business-logo-vector-gold-lotus-icon-design_53876-118100.jpg?w=740&t=st=1674041043~exp=1674041643~hmac=92afef933c14332b8d9fed11f068abad7542bb05679d679d33dd39b5bf29fe2b"
              alt=""
            />
          </div>
          <span className="company_name">Rblogs</span>
        </div>
        <div className="header_center">
          <ul className="nav__items">
            <li>Home</li>
            <li>Products</li>
            <li>Blogs</li>
            <li>About us</li>
          </ul>
        </div>
        <div className="header_right">
          <div className="header_search">
            <input type="text" placeholder="Search blogs here" />
            <BiSearch />
          </div>
          <div className="dark_mode">
            <CiDark />
          </div>
          <div className="avatar">
            <img src={profileImage} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
