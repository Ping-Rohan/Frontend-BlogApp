import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../../Redux/User";

export default function Header() {
  const dispatch = useDispatch();

  function handleOpenProfile() {
    dispatch(getMyProfile());
  }
  return (
    <header>
      <div className="container">
        <span>Logo</span>
        <ul className="nav__items">
          <li>Home</li>
          <li>Bookmarks</li>
          <li>Pricing</li>
          <li>About us</li>
        </ul>
        <div className="extra">
          <img
            src="https://img.freepik.com/free-photo/side-view-photo-attractive-smiling-summer-woman-straw-hat-isolated-yellow-wall_231208-9768.jpg?w=900&t=st=1673937438~exp=1673938038~hmac=cef4d2316444449ea2020c93a51c48019ecdbd2ac127567136f824ebf3ae8610"
            alt=""
            onClick={handleOpenProfile}
          />
          <button>Logout</button>
        </div>
      </div>
    </header>
  );
}
